package br.com.neki.projetoback.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.neki.projetoback.domain.UserSkill;
import br.com.neki.projetoback.dto.UserSkillDTO;

public interface UserSkillRepository extends JpaRepository<UserSkill, Long> {
	
	Optional<UserSkill> findById(Long userSkillId);

	List<UserSkillDTO> findByUserId(Long userSkillId);

	List<UserSkill> findByUserId(Integer id);
	
}
