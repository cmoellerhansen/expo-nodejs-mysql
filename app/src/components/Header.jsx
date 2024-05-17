import { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import { Text } from "@rneui/themed";

const Header = () => {
    const route = useRoute();
    const [title, setTitle] = useState("");

    useEffect(() => {
        switch (route?.name) {
            case "Home":
                setTitle("Home");
                break;
            case "Profile":
                setTitle("Profile");
                break;
            default:
                setTitle(route.name);
        }
    }, [route?.name]);

    return (
        <View style={styles.container}>
            <Text h2>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {}
});

export default Header;