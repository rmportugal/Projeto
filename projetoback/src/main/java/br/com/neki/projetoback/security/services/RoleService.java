package br.com.neki.projetoback.security.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.neki.projetoback.security.domain.Role;
import br.com.neki.projetoback.security.repositories.RoleRepository;



@Service
public class RoleService {
	@Autowired
	RoleRepository roleRepository;

	public Role save(Role role) {
		return roleRepository.save(role);
	}
}
