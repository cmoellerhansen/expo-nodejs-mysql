import { StyleSheet, View } from "react-native";
import { Text } from "@rneui/themed";

import useKeyboard from "../hooks/use-keyboard";

const Footer = () => {
    const keyboard = useKeyboard();
    return (
        <View style={[styles.container, { height: keyboard ? 0 : 'auto' }]}>
            <Text h2>
                Footer
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 'auto'
    }
});

export default Footer;