import { createDrawerNavigator } from '@react-navigation/drawer';

import useAuthContext from '../hooks/use-auth-context'; 

import Navbar from '../components/Navbar';

import { AuthStack } from './stack';
import Account from '../screens/Account';
import Home from '../screens/Home';

const appRoutes = [
    { name: 'Home', component: Home, options: { headerShown: true, header: props => <Navbar {...props} /> } },
    { name: 'Account', component: Account, options: { headerShown: true, header: props => <Navbar {...props} /> } },
];

const Drawer = createDrawerNavigator();
const { Navigator, Screen } = Drawer;

export default function DrawerNavigator() {
    const { isAuth, user } = useAuthContext();

    return (
        <Navigator>
            {isAuth ? appRoutes.map((route, index) => (
                <Screen 
                    key={index}
                    name={route.name}
                    component={route.component}
                    options={route.options}
                />
            )) : (
                <Screen 
                    name="Auth" 
                    component={AuthStack} 
                    options={{ headerShown: false }}
                />
            )}
        </Navigator>
    );
}