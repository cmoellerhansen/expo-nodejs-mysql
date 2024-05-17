import { createTheme, darkColors, lightColors } from "@rneui/themed";

const theme = createTheme({
    components: {
        Button: {
            buttonStyle: {
                paddingVertical: 16,
            },
            containerStyle: {
                borderRadius: 8,
                //paddingVertical: 8,
            },
            titleStyle: {
                fontSize: 24,
            },
        },
        Input: {
            containerStyle: {
                borderRadius: 8,
            },
        },
        Text: {
            h1Style: {
                fontWeight: 'normal',
            },
            h2Style: {
                fontWeight: 'normal'
            }
        },
    },
    mode: 'light',
});

export default theme;