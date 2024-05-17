import { useEffect, useState } from 'react';
import * as SecureStore from 'expo-secure-store';

export const useSecureStore = (key, initialValue) => {
    const [value, setValue] = useState(initialValue);

    const get = async () => {
        try {
            const storedValue = await SecureStore.getItemAsync(key);
            if (storedValue !== null) {
                setValue(storedValue);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const set = async (value) => {
        try {
            await SecureStore.setItemAsync(key, value);
            setValue(value);
        } catch (error) {
            console.error(error);
        }
    };

    const remove = async () => {
        try {
            await SecureStore.deleteItemAsync(key);
            setValue(null);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        get();
    }, [key]);

    return [value, set, remove];
}

export default useSecureStore;