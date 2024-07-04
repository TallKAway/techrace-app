import { useState, useEffect } from 'react';
import { StyleSheet, View, StyleProp, ViewStyle, Pressable } from 'react-native';

import { useSocket } from '@/shared/providers/SocketContext';

import Colors from '@/styles/constants/Colors';

type ControlButtonProps = {
    style: StyleProp<ViewStyle>;
    direction: string;
};

const ControlButton = ({ style, direction }: ControlButtonProps) => {
    const { socket } = useSocket();

    const [currentSpeed, setCurrentSpeed] = useState(0);
    // const [acceleratiosetCarDirectionnSpeed, setAccelerationSpeed] = useState(10);

    const [isMoving, setIsMoving] = useState(false);
    const [carDirection, setCarDirection] = useState('stop');

    useEffect(() => {
        moveControl(isMoving, carDirection);
    }, [isMoving]);

    const buttonDirectionPressed = () => {
        setCarDirection(direction);
        setIsMoving(true);
    };

    const buttonDirectionRelease = () => {
        setCarDirection('stop');
        setIsMoving(false);
    };

    const goForward = function () {
        if (currentSpeed < 4096) {
            // const newSpeed = currentSpeed * accelerationSpeed;
            // const newAcceleration = accelerationSpeed * 1.5;
            // setCurrentSpeed(newSpeed);
            // setAccelerationSpeed(newAcceleration);
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
        console.log('goBack');
    };
    const goLeft = function () {
        console.log('goLeft');
    };
    const goRight = function () {
        console.log('goRight');
    };

    const stopCar = function () {
        console.log('Car stop');
        // const speedData = {
        //     cmd: '1',
        //     data: [0, 0, 0, 0], top left, bottom left, top right, bottom righ
        // };
        // socket?.send(JSON.stringify(speedData));
    };

    const moveControl = function (isMoving: boolean, direction: string) {
        if (isMoving) {
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
            }
        } else {
            stopCar();
        }
    };

    return (
        <Pressable
            onPressIn={() => buttonDirectionPressed()}
            onPressOut={() => buttonDirectionRelease()}
            style={[styles.button, style]}
        >
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
