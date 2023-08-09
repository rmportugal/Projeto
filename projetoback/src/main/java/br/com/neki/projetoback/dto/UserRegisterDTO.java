package br.com.neki.projetoback.dto;

import br.com.neki.projetoback.security.dto.SignupRequestDTO;

public class UserRegisterDTO {
	
	private SignupRequestDTO signupRequestDTO;
	
	public UserRegisterDTO() {
		
	}
	
	public UserRegisterDTO (SignupRequestDTO signupRequestDTO) {
		this.signupRequestDTO = signupRequestDTO;
	}

	public SignupRequestDTO getSignupRequestDTO() {
		return signupRequestDTO;
	}

	public void setSignupRequestDTO(SignupRequestDTO signupRequestDTO) {
		this.signupRequestDTO = signupRequestDTO;
	}
	
}

