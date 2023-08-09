package br.com.neki.projetoback.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.neki.projetoback.domain.Skill;

@Repository("usuario")
public interface UsuarioRepository extends JpaRepository<Skill, Integer> {

}
