import { Header } from '@rneui/themed';

const Navbar = ({ back, navigation }) => {
    return (
        <Header 
            leftComponent={{
                icon: back ? 'arrow-back' : 'menu',
                onPress: () => back ? navigation.goBack() : navigation.toggleDrawer()
            }}
        />
    );
};

export default Navbar;