package br.com.neki.projetoback.services;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import br.com.neki.projetoback.repositories.UsuarioRepository;
import br.com.neki.projetoback.security.domain.Role;
import br.com.neki.projetoback.security.domain.User;
import br.com.neki.projetoback.security.repositories.RoleRepository;
import br.com.neki.projetoback.security.repositories.UserRepository;

import java.util.Set;

@Service
public class UsuarioService {

    @Autowired
    RoleRepository roleRepository;

    @Autowired
    PasswordEncoder encoder;

    @Autowired
    UserRepository userRepository;

    @Autowired
    UsuarioRepository usuarioRepository;

    public void registrarUsuario(String username, String senha, Set<Role> roles) {

        if (userRepository.findByUsername(username).isPresent()) {
            throw new RuntimeException("Usuário já cadastrado.");
        }

        String senhaCriptografada = encoder.encode(senha);

        User user = new User(null, username, senhaCriptografada);
        user.setRoles(roles);

        userRepository.save(user);
    }
}
