package br.com.neki.projetoback.security.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.neki.projetoback.security.domain.Role;
import br.com.neki.projetoback.security.enums.RoleEnum;



@Repository("role")
public interface RoleRepository extends JpaRepository<Role, Integer> {
	Optional<Role> findByName(RoleEnum name);

	Object findByName(String string);
}
