import { ScrollView, StyleSheet } from 'react-native';

import Header from './Header';
import Footer from './Footer';

const Screen = ({ children }) => {
    return (
        <ScrollView contentContainerStyle={styles.contentContainer} style={styles.container}>
            <>
                <Header />
                {children}
                <Footer />
            </>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    contentContainer: {
        flexGrow: 1,
    },
    container: {
        backgroundColor: '#fff',
        flex: 1,
        padding: 16
    },
});

export default Screen;