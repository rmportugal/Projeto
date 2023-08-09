import { useState } from "react";
import { RegisterContainer, RegisterForm, RegisterInput, RegisterPasswordInput, RegisterWrapper, SaveButton, ShowPasswordButton, TextRegister, Logo } from "./StyleRegister";
import { FiEye, FiEyeOff } from 'react-icons/fi';
import axios from "axios"; 
import { useNavigate } from "react-router-dom";
import LogoDev from '../../assets/LogoDevSkills-removebg.png';
import AlertComponent from '../../Components/Alert';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleShowPassword = (event) => {
        event.preventDefault();
        setShowPassword(!showPassword);
    };

    const isPasswordMismatch = password !== confirmPassword;

    const handleSave = async () => {
        if (isPasswordMismatch) {
            setErrorMessage('As senhas não coincidem');
            return;
        }

        try {
            const response = await axios.post('http://localhost:8080/projetoback/registrar', {
                username,
                password
            });

            if (response.status === 200) {
                setSuccessMessage('Cadastro realizado com sucesso!');
                setErrorMessage('');

                
                setTimeout(() => {
                navigate("/");
                }, 2000);
            } else {
                setErrorMessage('Ocorreu um erro ao realizar o cadastro');
                setSuccessMessage('');
            }
        } catch (error) {
            console.log(error);
            setErrorMessage('Ocorreu um erro ao realizar o cadastro');
            setSuccessMessage('');
        }
    }


    return (
        <>
            <RegisterContainer>
            <Logo src={LogoDev}/>
                <TextRegister> Criar Conta</TextRegister>
                <RegisterForm>
                    <RegisterWrapper>
                        <RegisterInput type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </RegisterWrapper>
                    <RegisterWrapper>
                        <RegisterPasswordInput type={showPassword ? 'text' : 'password'}
                            placeholder="Senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                        <ShowPasswordButton type="button" onClick={handleShowPassword}>
                            {showPassword ? <FiEyeOff /> : <FiEye />}
                        </ShowPasswordButton>
                    </RegisterWrapper>
                    <RegisterWrapper>
                        <RegisterPasswordInput type={showPassword ? 'text' : 'password'}
                            placeholder="Confirmar senha"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)} />
                        <ShowPasswordButton type="button" onClick={handleShowPassword}>
                            {showPassword ? <FiEyeOff /> : <FiEye />}
                        </ShowPasswordButton>
                    </RegisterWrapper>
                    <SaveButton type="button" onClick={handleSave} disabled={isPasswordMismatch}>Salvar</SaveButton>
                </RegisterForm>
            </RegisterContainer>

            {successMessage && (
                <AlertComponent textAlert={successMessage} onClose={() => setSuccessMessage('')}  type="success"/>
            )}

            {errorMessage && (
                <AlertComponent textAlert={errorMessage} onClose={() => setErrorMessage('')} />
            )}

            
        </>
    )
}

export default Register;
