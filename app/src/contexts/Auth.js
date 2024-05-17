import { createContext, useEffect, useState } from 'react';

import usePromptContext from '../hooks/use-prompt-context';
import useSecureStore from '../hooks/use-secure-store';

import { setAuthToken, removeAuthToken } from '../utils/auth';
import { getMe, login, logout, register } from '../services/auth';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const { hideDialog, setDialogContent, showDialog } = usePromptContext();
    const [token, setToken, removeToken] = useSecureStore('token', null);
    const [isAuth, setIsAuth] = useState(false);
    const [user, setUser] = useState(null);

    const loginHandler = async (credentials) => {
        const { rememberMe } = credentials;
        try {
            const { data } = await login(credentials);
            if (rememberMe) {
                setToken(data.token);
            }
            setUser(data.user);
            setIsAuth(true);
        } catch (error) {
            showDialog({
                title: 'Error',
                content: error.message,
                buttons: [{ title: 'OK', onPress: hideDialog }],
            });
            console.error(error);
        }
    };

    const logoutHandler = async () => {};

    const registerHandler = async (credentials) => {};

    useEffect(() => {
        if (token) {
            setAuthToken(token);
            getMe()
                .then((data) => {
                    setUser(data.user);
                    setIsAuth(true);
                })
                .catch((error) => {
                    removeAuthToken();
                    console.error(error);
                });
        }
    }, [token]);

    const value = {
        isAuth,
        user,
        login: loginHandler,
        logout: logoutHandler,
        register: registerHandler,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;