import { createContext, useReducer } from "react";
import { authReducer } from "../reducer/authReducer";
import axios from 'axios';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    const [authState, dispatch] = useReducer(authReducer, {
        authLoading: true,
        authenticated: false,
        user: null
    })

    const loginUser = async loginForm => {
        try {
            const res = await axios.post('http://localhost:8080/api/auth/login', loginForm);
            if(res.data.success){
                localStorage.setItem('accessToken', res.data.access_token);
            }
            return res.data;
        } catch(err) {
            if(err.response.data) return err.response.data;
            else return { success: false, message: err.message }
        }
    }

    const AuthContextData = {loginUser};

    return (
        <AuthContext.Provider value={AuthContextData}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;