package br.com.neki.projetoback.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.neki.projetoback.domain.Skill;
import br.com.neki.projetoback.domain.UserSkill;
import br.com.neki.projetoback.dto.SkillDTO;
import br.com.neki.projetoback.dto.UserSkillDTO;
import br.com.neki.projetoback.repositories.SkillRepository;
import br.com.neki.projetoback.repositories.UserSkillRepository;
import br.com.neki.projetoback.security.domain.User;
import br.com.neki.projetoback.security.repositories.UserRepository;
import jakarta.persistence.EntityNotFoundException;

@Service
public class SkillService {

    private final SkillRepository skillRepository;
    private final UserRepository userRepository;
    private final UserSkillRepository userSkillRepository;

    @Autowired
    public SkillService(SkillRepository skillRepository, UserRepository userRepository,UserSkillRepository userSkillRepository ) {
        this.skillRepository = skillRepository;
        this.userRepository = userRepository;
        this.userSkillRepository = userSkillRepository;
    }

    public List<SkillDTO> getAllUserSkills(Integer userId) {
        User user = userRepository.findById(userId).orElseThrow(EntityNotFoundException::new);
        return user.getUserSkills().stream().map(this::convertToDto).collect(Collectors.toList());
    }

    
    public List<SkillDTO> getAllPredefinedSkills() {
        List<Skill> habilidadesPredefinidas = skillRepository.findAll();
        return habilidadesPredefinidas.stream().map(this::convertSkillToDto).collect(Collectors.toList());
    }

    public void associateSkillToUser(Integer userId, Integer skillId, String level) {
        User user = userRepository.findById(userId).orElseThrow(EntityNotFoundException::new);
        Skill predefinedSkill = skillRepository.findById(skillId).orElseThrow(EntityNotFoundException::new);

        if (!isHabilidadePredefinida(predefinedSkill)) {
            throw new IllegalArgumentException("ID de habilidade inválido. A habilidade deve ser pré-definida.");
        }

      
        UserSkill userSkill = new UserSkill(user, predefinedSkill, level, predefinedSkill.getImageUrl(), predefinedSkill.getName(), predefinedSkill.getDescription());

        user.getUserSkills().add(userSkill);


        userRepository.save(user);
    }

    public void updateSkillLevel(Long userSkillId, String level) {

        UserSkill userSkill = findUserSkillById(userSkillId);
        if (userSkill != null) {
            userSkill.setLevel(level);
        } else {
            throw new EntityNotFoundException("Habilidade não associada ao usuário.");
        }

        userRepository.save(userSkill.getUser());
    }

    private UserSkill findUserSkillById(Long userSkillId) {
        return userSkillRepository.findById(userSkillId)
                .orElseThrow(() -> new EntityNotFoundException("Habilidade não associada ao usuário com o ID: " + userSkillId));
    }


    public void deleteUserSkill(Long userSkillId) {
        UserSkill userSkill = userSkillRepository.findById(userSkillId).orElseThrow(EntityNotFoundException::new);

        Skill skill = userSkill.getSkill();
        User user = userSkill.getUser();


        user.removeSkill(skill);


        userRepository.save(user);

        userSkillRepository.deleteById(userSkillId);
    }


    private boolean isHabilidadePredefinida(Skill skill) {
        return skillRepository.existsById(skill.getSkillId());
    }
    
    public List<UserSkillDTO> getAllSkillsByUserId(Integer id) {
        List<UserSkill> userSkills = userSkillRepository.findByUserId(id);
        
        if (userSkills.isEmpty()) {
            throw new EntityNotFoundException("No User Skills found for user with ID: " + id);
        }

        List<UserSkillDTO> userSkillDTOs = userSkills.stream()
                .map(this::convertUserSkillToDto)
                .collect(Collectors.toList());

        return userSkillDTOs;
    }
    
    private UserSkillDTO convertUserSkillToDto(UserSkill userSkill) {
        return new UserSkillDTO(
                userSkill.getUserSkillId(),
                userSkill.getUser().getId(),
                userSkill.getSkill().getSkillId(),
                userSkill.getImageUrl(),
                userSkill.getLevel(),
                userSkill.getName(),
                userSkill.getDescription()
        );
    }

    private SkillDTO convertToDto(UserSkill userSkill) {
        Skill skill = userSkill.getSkill();  
        return new SkillDTO(
                skill.getSkillId(),
                skill.getImageUrl(),
                skill.getName(),
                skill.getLevel(),
                skill.getDescription()
        );
    }
    
    private SkillDTO convertSkillToDto(Skill skill) {
        return new SkillDTO(
                skill.getSkillId(),
                skill.getImageUrl(),
                skill.getName(),
                skill.getLevel(),
                skill.getDescription()
        );
    }

}
