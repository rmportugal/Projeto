import styled from "styled-components";

export const Logo = styled.img`
width: 150px;
height: 150px;
`;

export const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-content: center;
  align-items: center;
  justify-content: center;
  background-color: #06072e;
  gap: 50px;
`;
export const FormularioLogin = styled.div`
  width: 35%;
  height: 35%;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  background-color: #00026d;
  box-shadow: 0px 3px 10px 7px rgba(0, 0, 0, 0.66);
  border-radius: 10px;
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const InputLogin = styled.input`
  width: 20rem;
  height: 2rem;
  border: solid 1px #000000;
  padding: 2%;
  background: #e8ecef;
  border-radius: 5px;
  font-size: 16px;
`;

export const PasswordInput = styled.input`
  width: 20rem;
  height: 2rem;
  border: solid 1px #000000;
  padding: 2%;
  background: #e8ecef;
  border-radius: 5px;
  font-size: 16px;
`;

export const ButtonLogin = styled.button`
  width: 15rem;
  height: 2rem;
  background: #5F9EA0;
  color: #e8ecef;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
`;

export const ShowPasswordButton = styled.button`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-40%);
  background: none;
  border: none;
  cursor: pointer;
`;

export const RememberPasswordCheckbox = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: #333;
`;

export const TextCheckbox = styled.label`
  font-size: 16px;
  font-family: "Oxygen";
  color: #ffffff;
`;

export const RemeberPasswordInput = styled.input``;

export const SignupButton = styled.button`
  width: 15rem;
  height: 2rem;
  background: #5F9EA0;
  color: #e8ecef;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
`;
