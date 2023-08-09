import styled, {css}from "styled-components";


export const Logo = styled.img`
width: 150px;
height: 150px;
margin-bottom: 100px;
`;

export const HomeContainer = styled.div`
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

export const SkillList = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 80%;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center
`;

export const SkillSquare = styled.div`
width: 30%;
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0px 3px 10px 7px rgba(0, 0, 0, 0.1);
  ${props =>
    props.selected &&
    css`
      border: 4px solid greenyellow; 
    `}
`;

export const SkillImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const SkillInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SkillName = styled.h2`
  font-size: 18px;
  font-weight: bold;
`;

export const SkillLevel = styled.div`
  font-size: 16px;
  margin: 5px 0;
`;

export const SkillDescription = styled.p`
  font-size: 14px;
  margin: 0;
`;

export const AddSkillButton = styled.button`
  width: 20%;
  height: 40px;
  background-color: #5F9EA0;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 40px;
`;

export const LogoutButton = styled.button`
  width: 20%;
  height: 40px;
  background-color: #FF6347;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

export const ModalContent = styled.div`
      display: flex;
    flex-direction: column;
    width: 80%;
    background-color: #316192;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
    gap: 40px;
    grid-gap: 20px;
    align-content: center;
    justify-content: center;
    align-items: center;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

export const SkillSelect = styled.select`
  width: 20.5em;
  height: 3.4em;
  border: 1px solid #000000;
  border-radius: 5px;
  font-size: 16px;
  padding: 3%;
`;

export const SaveButton = styled.button`
  width: 100%;
  height: 40px;
  background-color: #5F9EA0;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const CancelButton = styled.button`
  width: 100%;
  height: 40px;
  background-color: #FF6347;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
`;

export const SkillInput = styled.input`
  width: 20em;
  height: 3em;
  border: solid 1px #000000;
  padding: 1%;
  background: #e8ecef;
  border-radius: 5px;
  font-size: 16px;
`;

export const SkillText = styled.textarea`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20em;
  height: 3em;
  padding: 1%;
  border: solid 1px #000000;
  background: #e8ecef;
  border-radius: 5px;
  font-size: 16px;
`;
export const SkillLevelSelect = styled.select`
flex-direction: column;
    align-content: center;
    flex-wrap: wrap;
  font-size: 18px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 50%;
  padding: 10px;
`;

export const SaveCancelButtonContainer = styled.div`
  width: 70%;
  display: flex;
  gap:50px;
`;

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;