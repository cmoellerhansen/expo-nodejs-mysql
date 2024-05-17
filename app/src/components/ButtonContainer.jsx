import { StyleSheet, View } from "react-native";
import { Button } from "@rneui/themed";

const ButtonContainer = ({ buttons = [] }) => (
    <View style={styles.container}>
        {buttons.map((button, index) => (
            <Button key={index} {...button}>
                {button.title}
            </Button>
        ))}
    </View>
);

const styles = StyleSheet.create({
    container: {
        gap: 8,
        marginTop: 16
    }
});

export default ButtonContainer;