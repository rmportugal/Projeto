package br.com.neki.projetoback.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.neki.projetoback.security.dto.SignupRequestDTO;
import br.com.neki.projetoback.services.UsuarioService;

@RestController
public class UsuarioController {

    private final UsuarioService usuarioService;

    @Autowired
    public UsuarioController(UsuarioService usuarioService) {
        this.usuarioService = usuarioService;
    }

    @PostMapping("/registrar")
    public ResponseEntity<String> registrarUsuario(@RequestBody SignupRequestDTO request) {
        try {
            usuarioService.registrarUsuario(request.getUsername(), request.getPassword(), null);
            return ResponseEntity.ok("Usuário registrado com sucesso.");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}
