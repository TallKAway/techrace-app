import { useState } from 'react';
import { StyleSheet, View, StyleProp, ViewStyle, Pressable } from 'react-native';

import { useSocket } from '@/shared/providers/SocketContext';

import Colors from '@/styles/constants/Colors';

type ControlButtonProps = {
    style: StyleProp<ViewStyle>;
    direction: string;
};

const ControlButton = ({ style, direction }: ControlButtonProps) => {
    const { socket } = useSocket();
    const [currentSpeed, setCurrentSpeed] = useState(1);
    const [accelerationSpeed, setAccelerationSpeed] = useState(10);

    const goForward = function () {
        if (currentSpeed < 4096) {
            const newSpeed = currentSpeed * accelerationSpeed;
            const newAcceleration = accelerationSpeed * 1.5;

            setCurrentSpeed(newSpeed);
            setAccelerationSpeed(newAcceleration);
        } else {
            setCurrentSpeed(4096);
        }

        console.log('Current speed : ', currentSpeed);

        const speedData = {
            cmd: '1',
            data: [currentSpeed, currentSpeed, currentSpeed, currentSpeed],
        };
        socket?.send(JSON.stringify(speedData));
        console.log('goForward');
    };
    const goBack = function () {
        const speedData = {
            cmd: '1',
            data: [0, 0, 0, 0],
        };
        socket?.send(JSON.stringify(speedData));
        console.log('goBack');
    };
    const goLeft = function () {
        console.log('goLeft');
    };
    const goRight = function () {
        console.log('goRight');
    };
    const stop = function () {
        console.log('stop');
    };

    const moveControl = function (direction: string) {
        switch (direction) {
            case 'up':
                goForward();
                break;

            case 'down':
                goBack();
                break;

            case 'left':
                goLeft();
                break;

            case 'right':
                goRight();
                break;

            case 'stop':
                stop();
                break;

            default:
                break;
        }
    };

    return (
        <Pressable onPress={() => moveControl(direction)} style={[styles.button, style]}>
            <View style={styles.triangle}></View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        borderColor: Colors.primary,
        borderRadius: 100,
        borderWidth: 4,
        height: 72,
        justifyContent: 'center',
        width: 72,
    },

    triangle: {
        borderBottomColor: Colors.primary,
        borderBottomWidth: 30,
        borderLeftColor: Colors.transparent,
        borderLeftWidth: 17,
        borderRightColor: Colors.transparent,
        borderRightWidth: 17,
        marginBottom: 7,
        width: 30,
    },
});

export default ControlButton;
