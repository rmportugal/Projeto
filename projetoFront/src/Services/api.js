import axios from "axios";


export const api = axios.create({
    baseURL:"http://localhost:8080/projetoback"
});

export const createSessions = async (username,password) => {
    return api.post ('/auth/signin', {username, password})
}