import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Animated, { FadeIn, Fa, FadeInDowndeInDown, FadeInDown, SlideInDown } from 'react-native-reanimated';

const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity);

const { width, height } = Dimensions.get('window');

export default function Details({ route }) {

    const { goBack } = useNavigation();

    const {
        index,
        title,
        location,
        poster,
        date,
    } = route.params.item;

    return (
        <View style={{
            flex: 1,
        }}>
            <View style={styles.container}>
                <Animated.Image
                    sharedTransitionTag={`${poster}`}
                    source={{ uri: poster }}
                    style={StyleSheet.absoluteFillObject}
                />
                <Animated.View
                    entering={FadeIn.duration(200).delay(1400)}
                    style={[StyleSheet.absoluteFillObject, {
                        backgroundColor: 'rgba(0,0,0,0.35)',
                    }]}
                />
                <AnimatedTouchableOpacity
                    entering={FadeIn.duration(200).delay(1400)}
                    style={{
                        position: 'absolute',
                        top: 40,
                        right: 40,
                    }}
                    onPress={() => {
                        goBack();
                    }}
                >
                    <AntDesign name="close" size={38} color="#fff" />
                </AnimatedTouchableOpacity>
            </View>
            <Animated.View
                entering={SlideInDown.duration(600)}
                style={{
                    position: 'absolute',
                    bottom: 0,
                    width,
                    height: height * 0.3 + 30,
                    backgroundColor: '#fff',
                    borderTopLeftRadius: 30,
                    borderTopEndRadius: 30,
                    padding: 40,
                }}>
                <Animated.Text
                    entering={FadeInDown.duration(200).delay(500)}
                    style={{
                        fontSize: 35,
                        fontWeight: 'bold',
                    }}>
                    {title}
                </Animated.Text>
                <Animated.Text
                    entering={FadeInDown.duration(200).delay(700)}
                    style={{
                        fontSize: 25,
                    }}>
                    {location}
                </Animated.Text>
                <Animated.Text
                    entering={FadeInDown.duration(200).delay(1100)}
                    style={{
                        fontSize: 18,
                    }}>
                    {date}
                </Animated.Text>
            </Animated.View>
        </View>
    );
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});