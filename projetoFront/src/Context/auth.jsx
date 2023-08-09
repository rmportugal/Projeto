import { createContext, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { api, createSessions } from '../Services/api';
import PropTypes from 'prop-types';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const navigate = useNavigate();
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    AuthProvider.propTypes = {
        children: PropTypes.node.isRequired,
      };
    useEffect(() => {
        const recoveredUser = localStorage.getItem('user')
        if (recoveredUser) {
            setUser(JSON.parse(recoveredUser));
        }

        setLoading(false);

    }, []);

    const login = async (username, password) => {
        const reponse = await createSessions(username, password)
        const loggedUser = reponse.data.username;
        const accessToken = reponse.data.accessToken;
        const userId = reponse.data.id;

        localStorage.setItem("user", JSON.stringify(loggedUser))
        localStorage.setItem("token", accessToken)
        localStorage.setItem("userId", userId)
        localStorage.setItem("password", password)


        api.defaults.headers.Authorization = `Bearer ${accessToken}`;

        setUser(loggedUser);
        navigate("/home");
    };

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        setUser(null);
        navigate("/");
    };

    return (
        <AuthContext.Provider 
        value={{
            authenticated: !!user,
            user,
            loading,
            login,
            logout
        }}
        >
            {children}
        </AuthContext.Provider>
    );
}

