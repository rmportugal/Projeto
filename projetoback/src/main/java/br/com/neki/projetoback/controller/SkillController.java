package br.com.neki.projetoback.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.neki.projetoback.dto.SkillDTO;
import br.com.neki.projetoback.dto.UserSkillDTO;
import br.com.neki.projetoback.services.SkillService;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import jakarta.persistence.EntityNotFoundException;

@RestController
@RequestMapping("/skills")
public class SkillController {

    private final SkillService skillService;

    @Autowired
    public SkillController(SkillService skillService) {
        this.skillService = skillService;
    }
    @SecurityRequirement(name="Bearer Auth")
    @GetMapping("/predefined")
    public ResponseEntity<List<SkillDTO>> getAllPredefinedSkills() {
        List<SkillDTO> predefinedSkills = skillService.getAllPredefinedSkills();
        return ResponseEntity.ok(predefinedSkills);
    }
    @SecurityRequirement(name="Bearer Auth")
    @GetMapping("/{id}")
    public ResponseEntity<List<UserSkillDTO>> getAllSkillsByUserId(@PathVariable Integer id) {
        List<UserSkillDTO> userSkills = skillService.getAllSkillsByUserId(id);
        return ResponseEntity.ok(userSkills);
    }
    @SecurityRequirement(name="Bearer Auth")
    @PutMapping("/{id}/associate")
    public ResponseEntity<Void> associateSkillToUser(
            @PathVariable Integer id,
            @RequestParam Integer skillId,
            @RequestParam String level
    ) {
        try {
            skillService.associateSkillToUser(id, skillId, level);
            return ResponseEntity.noContent().build();
        } catch (EntityNotFoundException e) {
            return ResponseEntity.notFound().build();
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().build();
        }
    }
    @SecurityRequirement(name="Bearer Auth")
    @PutMapping("/{userSkillId}/update")
    public ResponseEntity<Void> updateSkillAssociation(
            @PathVariable Long userSkillId,
            @RequestParam String level
    ) {
        try {
            skillService.updateSkillLevel(userSkillId, level);
            return ResponseEntity.noContent().build();
        } catch (EntityNotFoundException e) {
            return ResponseEntity.notFound().build();
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().build();
        }
    }
    @SecurityRequirement(name="Bearer Auth")
    @DeleteMapping("/skills/{userSkillId}")
    public ResponseEntity<Void> deleteUserSkill(@PathVariable Long userSkillId) {
        try {
            skillService.deleteUserSkill(userSkillId);
            return ResponseEntity.noContent().build();
        } catch (EntityNotFoundException e) {
            return ResponseEntity.notFound().build();
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().build();
        }
    }
}
