import React, { useState } from 'react';
import {
    Dimensions,
    Image,
    StyleSheet,
    TouchableOpacity,
    View,
    Pressable
} from 'react-native';
import { styles } from './styles';
import { DATA } from '../../data';
import Animated, { interpolate, runOnJS, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import {
    Gesture,
    GestureDetector,
    Directions
} from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');
const IMAGE_WIDTH = width * 0.75;
const IMAGE_HEIGHT = IMAGE_WIDTH * 1.4;
const SPACING = IMAGE_WIDTH * 0.05

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export default function Img(props) {

    const { navigate } = useNavigation();

    const {
        index,
        title,
        location,
        poster,
        _index,
        date,
        animatedValue,
    } = props;

    const item = {
        index,
        title,
        location,
        poster,
        date,
    }

    const inputRange = [
        index - 1,
        index,
        index + 1,
    ]


    //index: 0 -1,0,1 -> 50,0,-50
    //index: 1  0,1,2 -> 50,0,-50
    //index: 2  0,1,2,3 -> 100,50,0,-50
    //index: 3 -1,0,1 -> 50,0,-50
    //index: 4 -1,0,1 -> 50,0,-50
    const animatedStyle = useAnimatedStyle(() => {
        return {
            opacity: interpolate(animatedValue.value,
                inputRange,
                [1 - (0.8 / DATA.length), 1, 0]
            ),
            transform: [
                {
                    translateX: interpolate(animatedValue.value,
                        inputRange,
                        [((width - (IMAGE_WIDTH + SPACING * 2)) / (DATA.length - 1)) * 2.5, 0, -60]
                    )
                },
                {
                    scale: interpolate(animatedValue.value,
                        inputRange,
                        [1 - (0.8 / DATA.length), 1, 1.2]
                    )
                }
            ]
        }
    })

    return (
        <AnimatedPressable
            style={[{
                zIndex: index > 0 ? -index : index,
                pointerEvents: _index == index ? 'auto' : 'none',
            }, styles.image, animatedStyle]}
            onPress={() => {
                navigate('Details', { item })
            }}
        >
            <Animated.Image
                sharedTransitionTag={`${poster}`}
                source={{ uri: poster }}
                style={StyleSheet.absoluteFillObject}
            />
        </AnimatedPressable>
    );
}