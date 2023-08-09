import styled from "styled-components";

export const Logo = styled.img`
width: 150px;
height: 150px;
margin-bottom: 60px;
`;

export const TextRegister = styled.h1`
margin-bottom: 2%;
font-weight: 400;
color: #ffffff;
font-size: 40px;
`;
export const RegisterContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #06072e;
`;

export const RegisterForm = styled.form`
  background-color: #00026d;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 3%;
  border-radius: 10px;
  box-shadow: 0px 3px 10px 7px rgba(0, 0, 0, 0.10);
`;

export const RegisterInput = styled.input`
  width: 20rem;
  height: 2rem;
  border: solid 1px #000000;
  padding: 2%;
  background: #ffffff;
  border-radius: 5px;
  font-size: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const RegisterPasswordInput = styled.input`
  width: 20rem;
  height: 2rem;
  border: solid 1px #000000;
  padding: 2%;
  background: #ffffff;
  border-radius: 5px;
  font-size: 16px;
`;

export const RegisterWrapper = styled.div`
  position: relative;
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

export const SaveButton = styled.button`
  width: 15rem;
  height: 2.9rem;
  background: #5F9EA0;
  color: #e8ecef;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-left:15%;
`;
