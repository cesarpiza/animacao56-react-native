import React, { useState } from 'react';
import {
    Dimensions,
    StatusBar,
    StyleSheet,
    View,
} from 'react-native';
import { DATA } from './data';
import Img from './components/image/index';
import Info from './components/info/index';
import { Directions, Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler';
import Animated, { interpolate, runOnJS, useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';

const { width, height } = Dimensions.get('window');

export default function Home() {

    const [data, setData] = useState(DATA);

    const animatedValue = useSharedValue(0);
    const [_index, setIndex] = useState(0);



    const setCurrentIndex = (V) => {
        if (V == "L") {
            setIndex(_index + 1)
            console.log("L")
            animatedValue.value = withTiming(_index + 1)
        } else if (V == "R") {
            setIndex(_index - 1)
            console.log("R")
            animatedValue.value = withTiming(_index - 1)
        }
    }

    const handleLeft = Gesture
        .Fling()
        .direction(Directions.LEFT)
        .onStart(() => {
            if (_index == DATA.length - 1) {
                return;
            }
            runOnJS(setCurrentIndex)("L");
        })

    const handleRight = Gesture
        .Fling()
        .direction(Directions.RIGHT)
        .onStart(() => {
            if (_index == 0) {
                return;
            }
            runOnJS(setCurrentIndex)("R");
        })

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateY: interpolate(animatedValue.value,
                        [-1, 0, 1],
                        [height * 0.25, 0, -height * 0.25]
                    )
                },
            ]
        }
    })

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <View style={styles.container}>
                <StatusBar hidden />
                <View style={styles.infoContainer}>
                    <Animated.View style={[{
                        flex: 1,
                    }, animatedStyle]}>
                        {data.map((item, index) => {
                            return (
                                <Info {...item} key={index.toString()} />
                            )
                        })}
                    </Animated.View>
                </View>
                <GestureDetector gesture={Gesture.Race(handleLeft, handleRight)}>
                    <View style={styles.imageContainer}>
                        {data.map((item, index) => {
                            return (
                                <Img key={index.toString()} animatedValue={animatedValue} _index={_index} {...item} index={index} />
                            )
                        })}
                    </View>
                </GestureDetector>
            </View>
        </GestureHandlerRootView>
    );
}



export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    infoContainer: {
        flex: 0.25,
        overflow: 'hidden',
    },
    imageContainer: {
        flex: 0.75,
    },
});