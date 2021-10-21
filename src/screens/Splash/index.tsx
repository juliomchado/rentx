import React from 'react';

import { StatusBar, Button, StyleSheet, Dimensions } from 'react-native';

import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    Easing
} from 'react-native-reanimated';

const WIDTH = Dimensions.get('window').width;

import {
    Container
} from './styles';

export function Splash() {

    const animation = useSharedValue(0);

    const animatedStyles = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX: withTiming(animation.value,
                        {
                            duration: 500,
                            easing: Easing.bezier(.93, .14, 0, .99)
                        })

                }
            ],

        }
    });

    function handlePositionAnimation() {
        animation.value = Math.random() * (WIDTH - 100);
    }

    return (
        <Container>
            <StatusBar
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />

            <Animated.View style={[styles.box, animatedStyles]} />

            <Button title="Mover" onPress={handlePositionAnimation} />


        </Container>
    );
}

const styles = StyleSheet.create({
    box: {
        width: 100,
        height: 100,
        backgroundColor: 'red'
    }
})