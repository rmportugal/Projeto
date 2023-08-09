package br.com.neki.projetoback.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.neki.projetoback.domain.Skill;


public interface SkillRepository extends JpaRepository<Skill, Integer> {

}
