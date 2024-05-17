import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useAsyncStorage = (key, initialValue) => {
    const [value, setValue] = useState(initialValue);   

    const get = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem(key);
            if (jsonValue !== null) {
                setValue(JSON.parse(jsonValue));
            }
        } catch (error) {
            console.error(error);
        }
    };

    const set = async (value) => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem(key, jsonValue);
            setValue(value);
        } catch (error) {
            console.error(error);
        }
    };

    const remove = async () => {
        try {
            await AsyncStorage.removeItem(key);
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

export default useAsyncStorage;