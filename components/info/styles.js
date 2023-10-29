import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');
const IMAGE_WIDTH = width * 0.75;
const IMAGE_HEIGHT = IMAGE_WIDTH * 1.4;
const SPACING = IMAGE_WIDTH * 0.05

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        paddingHorizontal: SPACING,
        justifyContent: 'center',
    },
    infoContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 34,
        fontWeight: 'bold',
    },
    location: {
        fontSize: 18,
    },
    date: {
        fontSize: 14,
    },
});