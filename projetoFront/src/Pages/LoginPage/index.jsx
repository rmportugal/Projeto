import { useState, useEffect, useContext } from 'react';
import { ShowPasswordButton, RememberPasswordCheckbox, SignupButton, RemeberPasswordInput, InputLogin, ButtonLogin, FormularioLogin, Container, PasswordInput, InputWrapper, TextCheckbox, Logo } from './StyleLogin';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { AuthContext } from '../../Context/auth';
import LogoDev from '../../assets/LogoDevSkills-removebg.png'

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [rememberPassword, setRememberPassword] = useState(false);
    const { login } = useContext(AuthContext)

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleRememberPassword = () => {
        setRememberPassword(!rememberPassword);
        if (!rememberPassword) {
            localStorage.setItem('rememberPassword', 'true');
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
        } else {
            localStorage.removeItem('rememberPassword');
            localStorage.removeItem('username');
            localStorage.removeItem('password');
        }
    };

    const handleRegister = () => {
        window.location.href = "/cadastro";
      };
      
    const handleLogin = async (e) => {
        e.preventDefault();
        login(username, password)
    };

    useEffect(() => {
        const rememberPasswordValue = localStorage.getItem('rememberPassword');
        if (rememberPasswordValue === 'true') {
            setRememberPassword(true);
            const savedUsername = localStorage.getItem('username');
            const savedPassword = localStorage.getItem('password');
            setUsername(savedUsername || '');
            setPassword(savedPassword || '');
        }
    }, []);

    return (
        <>
            <Container>
                <Logo src={LogoDev}/>
                <FormularioLogin>
                    <InputWrapper>
                        <InputLogin type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </InputWrapper>
                    <InputWrapper>
                        <PasswordInput
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <ShowPasswordButton onClick={handleShowPassword}>
                            {showPassword ? <FiEyeOff /> : <FiEye />}
                        </ShowPasswordButton>
                    </InputWrapper>
                    <RememberPasswordCheckbox>
                        <RemeberPasswordInput type="checkbox" checked={rememberPassword} onChange={handleRememberPassword} />
                        <TextCheckbox>Lembrar meu usuário</TextCheckbox>
                    </RememberPasswordCheckbox>
                    <SignupButton onClick={handleRegister}>Cadastrar-se</SignupButton>
                    <ButtonLogin onClick={handleLogin}>Entrar</ButtonLogin>
                </FormularioLogin>
            </Container>
        </>
    );
};

export default Login;
