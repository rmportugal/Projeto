import { useState, useEffect, useContext } from "react";
import {
  HomeContainer,
  SkillList,
  SkillSquare,
  SkillImage,
  SkillInfo,
  SkillName,
  SkillDescription,
  SkillLevel,
  AddSkillButton,
  LogoutButton,
  Modal,
  ModalContent,
  CloseButton,
  SaveButton,
  CancelButton,
  SaveCancelButtonContainer,
  ModalWrapper,
  SkillLevelSelect,
  Logo,
} from "./HomeStyle";
import { FiTrash2, FiEdit } from "react-icons/fi";
import { AuthContext } from "../../Context/auth";
import axios from "axios";
import LogoDev from '../../assets/LogoDevSkills-removebg.png'

const Home = () => {
  const { logout, user } = useContext(AuthContext);
  const [skills, setSkills] = useState([]);
  const [predefinedSkills, setPredefinedSkills] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [updateTrigger, setUpdateTrigger] = useState(0);
  const [isEditing, setIsEditing] = useState(false);

  const triggerUpdate = () => {
    setUpdateTrigger((prev) => prev + 1);
  };


  useEffect(() => {
    const fetchUserSkills = async () => {
      const id = localStorage.getItem("userId");
      try {
        const response = await axios.get(`http://localhost:8080/projetoback/skills/${id}`);
        setSkills(response.data);
      } catch (error) {
        console.error("Erro ao obter habilidades do usuário:", error);
      }
    };

    const fetchPredefinedSkills = async () => {
      try {
        const response = await axios.get("http://localhost:8080/projetoback/skills/predefined");
        setPredefinedSkills(response.data);
      } catch (error) {
        console.error("Erro ao obter habilidades pré-definidas:", error);
      }
    };

    fetchUserSkills();
    fetchPredefinedSkills();
  }, [user.id, user.userSkillId, updateTrigger]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedSkill("");
    setSelectedLevel("");
    setIsEditing(false);
  };

  const handleLogout = () => {
    logout();
  };


  const handleAddSkill = async () => {
    const id = localStorage.getItem("userId");
    try {
      const response = await axios.put(
        `http://localhost:8080/projetoback/skills/${id}/associate`,
        null,
        {
          params: {
            skillId: selectedSkill,
            level: selectedLevel,
          },
        }
      );

      console.log(response.data);
      handleCloseModal();
      triggerUpdate();
    } catch (error) {
      console.error("Erro ao adicionar habilidade:", error);
    }
  };

  const handleDeleteSkill = async (userSkillId) => {
    try {
      await axios.delete(
        `http://localhost:8080/projetoback/skills/skills/${userSkillId}`,
        {
          userSkillId,
        }
      );
      triggerUpdate();
    } catch (error) {
      console.error("Erro ao excluir habilidade:", error);
    }
  };

  const handleSkillClick = (skill) => {
    setSelectedSkill(skill.skillId);
    setSelectedLevel(skill.level);
  };

  const renderUserSkills = () => {
    return skills.map((skill) => (
      <SkillSquare key={skill.userSkillId} onClick={() => handleSkillClick(skill)} selected={selectedSkill === skill.skillId}>
        <SkillImage src={skill.imageUrl} alt={skill.name} />
        <SkillInfo>
          <SkillName>{skill.name} </SkillName>
          <SkillDescription>{skill.description}</SkillDescription>
          <SkillLevel>Nível da habilidade: {skill.level} </SkillLevel>

          <div>
            <FiEdit
              onClick={() => {
                localStorage.setItem("userSkillId", skill.userSkillId);
                setSelectedLevel(skill.level);
                setIsEditing(true);
                handleOpenModal();
              }}
              style={{ cursor: "pointer" }}
            />
            <FiTrash2 onClick={() => handleDeleteSkill(skill.userSkillId)} style={{ cursor: "pointer" }} />
          </div>
        </SkillInfo>
      </SkillSquare>
    ));
  };

  const renderPredefinedSkills = () => {
    return predefinedSkills.map((skill) => (
      <SkillSquare key={skill.skillId} onClick={() => handleSkillClick(skill)} selected={selectedSkill === skill.skillId}>
        <SkillImage src={skill.imageUrl} alt={skill.name} />
        <SkillInfo>
          <SkillName>{skill.name}</SkillName>
          <SkillDescription>{skill.description}</SkillDescription>
          <SkillLevel>Nível da habilidade: {selectedSkill === skill.skillId ? selectedLevel : skill.level} <span>(clique para alterar)</span></SkillLevel>
        </SkillInfo>
      </SkillSquare>
    ));
  };



  const handleEditSkill = async () => {
    const userSkillId = localStorage.getItem("userSkillId");
    try {
      const response = await axios.put(
        `http://localhost:8080/projetoback/skills/${userSkillId}/update`,
        null,
        {
          params: {
            userSkillId,
            level: selectedLevel,
          },
        }
      );

      console.log(response.data);
      handleCloseModal(); 
      triggerUpdate(); 
    } catch (error) {
      console.error("Erro ao atualizar habilidade:", error);
    }
  };


  return (
    <>
      <HomeContainer>
        <Logo src={LogoDev} />
        <SkillList>
          {renderUserSkills()}
        </SkillList>
        <AddSkillButton onClick={() => { setIsEditing(false); handleOpenModal(); }}>Adicionar Habilidade</AddSkillButton>
        {isModalOpen && (
          <Modal>
            <ModalContent>

              <CloseButton onClick={handleCloseModal}>&times;</CloseButton>
              {isEditing ? (
                <SkillLevelSelect
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                >
                  <option value="Iniciante">Iniciante</option>
                  <option value="Intermediario">Intermediario</option>
                  <option value="Avançado">Avançado</option>
                  <option value="Profissional">Profissional</option>
                </SkillLevelSelect>
              ) : (
                <ModalWrapper>
                  {renderPredefinedSkills()}
                  {selectedSkill && (
                    <SkillLevelSelect
                      value={selectedLevel}
                      onChange={(e) => setSelectedLevel(e.target.value)}
                    >
                      <option value="Iniciante">Iniciante</option>
                      <option value="Intermediario">Intermediario</option>
                      <option value="Avançado">Avançado</option>
                      <option value="Profissional">Profissional</option>
                    </SkillLevelSelect>
                  )}
                </ModalWrapper>
              )}
              <SaveCancelButtonContainer>
                <SaveButton onClick={isEditing ? handleEditSkill : handleAddSkill} disabled={!selectedLevel}>
                  {isEditing ? "Salvar Edição" : "Salvar"}
                </SaveButton>
                <CancelButton onClick={handleCloseModal}>Cancelar</CancelButton>
              </SaveCancelButtonContainer>
            </ModalContent>
          </Modal>
        )}
        <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
      </HomeContainer>
    </>
  );
};

export default Home;
