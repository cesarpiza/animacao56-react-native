import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');
const IMAGE_WIDTH = width * 0.75;
const IMAGE_HEIGHT = IMAGE_WIDTH * 1.4;
const SPACING = IMAGE_WIDTH * 0.05

export const styles = StyleSheet.create({
    image: {
        position: 'absolute',
        top: SPACING * 2,
        left: SPACING,
        width: IMAGE_WIDTH,
        height: IMAGE_HEIGHT,
        borderRadius: IMAGE_WIDTH * 0.06,
        overflow: 'hidden',
    },
});