import client from "../lib/client";

export const setAuthToken = (token) => {
    client.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const removeAuthToken = () => {
    delete client.defaults.headers.common['Authorization'];
};