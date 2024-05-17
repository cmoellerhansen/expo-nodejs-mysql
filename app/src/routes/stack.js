import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Navbar from '../components/Navbar';

import Signin from '../screens/Login';
import Signup from '../screens/Register';

const Stack = createNativeStackNavigator();
const { Navigator, Screen } = Stack;

export const AuthStack = () => (
    <Navigator
        screenOptions={{
            headerShown: false  
        }}
    >
        <Screen 
            name="Login" 
            component={Signin}
        />
        <Screen 
            name="Register" 
            component={Signup}
        />
    </Navigator>
);