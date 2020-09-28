import { StyleSheet } from 'react-native';
import { main, sec } from './colors';

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 5,
        padding: 20,
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        elevation: 4,
        borderRadius: 5,
    },
    text: {
        fontFamily: 'open-sans',
    },
    image: {
        height: '100%',
        width: '100%',
    },
});

export default styles;