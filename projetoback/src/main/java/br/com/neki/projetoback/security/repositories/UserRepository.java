package br.com.neki.projetoback.security.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import br.com.neki.projetoback.domain.Skill;
import br.com.neki.projetoback.security.domain.User;

@Repository("user")
public interface UserRepository extends JpaRepository<User, Integer> {
    Optional<User> findByUsername(String username);

    Boolean existsByUsername(String username);

    @Query("SELECT u FROM User u WHERE :skill MEMBER OF u.userSkills")
    List<User> findBySkillsContains(@Param("skill") Skill skill);

	

}

