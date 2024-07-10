// import { useState } from 'react';
import 'react-native-gesture-handler';
import { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import {
    GestureHandlerRootView,
    GestureHandlerStateChangeEvent,
    State,
    TapGestureHandler,
} from 'react-native-gesture-handler';

// import { GestureHandlerRootView } from 'react-native-gesture-handler';
// import { TouchableHighlight } from 'react-native-gesture-handler';

// import ControlButton from '@/components/design-system/ControlButton';

import BatteryIcon from '@/components/design-system/icons/Battery';
import { useSocket } from '@/shared/providers/SocketContext';
import Colors from '@/styles/constants/Colors';

const durationMs = 99999;
const maxWheelValue = 4069;

export default function CarRaceScreen() {
    const { socket } = useSocket();

    const [forwardButtonPressed, setForwardButtonPressed] = useState(false);
    const [backwardButtonPressed, setBackwardButtonPressed] = useState(false);

    const [leftButtonPressed, setLeftButtonPressed] = useState(false);
    const [rightButtonPressed, setRightButtonPressed] = useState(false);

    const [isMoving, setIsMoving] = useState(false);

    const handleForwardButtonEvent = (event: GestureHandlerStateChangeEvent) => {
        if (event.nativeEvent.state === State.BEGAN) {
            setForwardButtonPressed(true);
            setIsMoving(true);
        } else if (
            event.nativeEvent.state === State.END ||
            event.nativeEvent.state === State.FAILED ||
            event.nativeEvent.state === State.CANCELLED
        ) {
            setForwardButtonPressed(false);
            setIsMoving(false);
        }
    };

    const handleBackwardButtonEvent = (event: GestureHandlerStateChangeEvent) => {
        if (event.nativeEvent.state === State.BEGAN) {
            setBackwardButtonPressed(true);
            setIsMoving(true);
        } else if (
            event.nativeEvent.state === State.END ||
            event.nativeEvent.state === State.FAILED ||
            event.nativeEvent.state === State.CANCELLED
        ) {
            setBackwardButtonPressed(false);
            setIsMoving(false);
        }
    };

    const handleLeftButtonEvent = (event: GestureHandlerStateChangeEvent) => {
        if (event.nativeEvent.state === State.BEGAN) {
            setLeftButtonPressed(true);
            setIsMoving(true);
        } else if (
            event.nativeEvent.state === State.END ||
            event.nativeEvent.state === State.FAILED ||
            event.nativeEvent.state === State.CANCELLED
        ) {
            setLeftButtonPressed(false);
            setIsMoving(false);
        }
    };

    const handleRightButtonEvent = (event: GestureHandlerStateChangeEvent) => {
        if (event.nativeEvent.state === State.BEGAN) {
            setRightButtonPressed(true);
            setIsMoving(true);
        } else if (
            event.nativeEvent.state === State.END ||
            event.nativeEvent.state === State.FAILED ||
            event.nativeEvent.state === State.CANCELLED
        ) {
            setRightButtonPressed(false);
            setIsMoving(false);
        }
    };

    useEffect(() => {
        setIsMoving(true);
        carMoveControl(isMoving);
    }, [isMoving]);

    const carMoveControl = (isMoving: boolean) => {
        let frontLeftWheelValue = 0;
        let backLeftWheelValue = 0;
        let frontRightWheelValue = 0;
        let backRightWheelValue = 0;

        if (isMoving) {
            // Move forward and turn Right
            if (forwardButtonPressed && rightButtonPressed) {
                frontLeftWheelValue = maxWheelValue;
                frontRightWheelValue = maxWheelValue;
                backLeftWheelValue = maxWheelValue;
                backRightWheelValue = 0;
            }

            // Move forward and turn Left
            if (forwardButtonPressed && leftButtonPressed) {
                frontLeftWheelValue = maxWheelValue;
                frontRightWheelValue = maxWheelValue;
                backRightWheelValue = maxWheelValue;
                backLeftWheelValue = 0;
            }

            // Move backward and turn Right
            if (forwardButtonPressed && rightButtonPressed) {
                frontLeftWheelValue = -maxWheelValue;
                frontRightWheelValue = -maxWheelValue;
                backLeftWheelValue = -maxWheelValue;
                backRightWheelValue = 0;
            }

            // Move backward and turn Left
            if (forwardButtonPressed && rightButtonPressed) {
                frontLeftWheelValue = -maxWheelValue;
                frontRightWheelValue = -maxWheelValue;
                backRightWheelValue = -maxWheelValue;
                backLeftWheelValue = 0;
            }

            // Move forward
            if (forwardButtonPressed) {
                frontLeftWheelValue = maxWheelValue;
                frontRightWheelValue = maxWheelValue;
                backRightWheelValue = maxWheelValue;
                backLeftWheelValue = maxWheelValue;
            }

            // Move backward
            if (forwardButtonPressed) {
                frontLeftWheelValue = -maxWheelValue;
                frontRightWheelValue = -maxWheelValue;
                backRightWheelValue = -maxWheelValue;
                backLeftWheelValue = -maxWheelValue;
            }
            // Turn Left
            if (rightButtonPressed) {
                frontLeftWheelValue = 0;
                frontRightWheelValue = maxWheelValue;
                backRightWheelValue = maxWheelValue;
                backLeftWheelValue = 0;
            }
            // Turn Right
            if (rightButtonPressed) {
                frontLeftWheelValue = maxWheelValue;
                frontRightWheelValue = 0;
                backRightWheelValue = 0;
                backLeftWheelValue = maxWheelValue;
            }
        } else {
            frontLeftWheelValue = 0;
            backLeftWheelValue = 0;
            frontRightWheelValue = 0;
            backRightWheelValue = 0;
        }

        const speedData = {
            cmd: '1',
            data: [
                frontLeftWheelValue,
                backLeftWheelValue,
                frontRightWheelValue,
                backRightWheelValue,
            ],
        };
        socket?.send(JSON.stringify(speedData));
    };

    return (
        <View style={styles.container}>
            <View style={styles.controlScreen}>
                <View style={styles.chrono}>
                    <Text style={styles.chronoText}>0</Text>
                    <Text style={styles.chronoText}>Km/h</Text>
                </View>
                <View style={styles.detailsBanner}>
                    <Text style={styles.detailsBannerText}>0:03:53s</Text>
                    <View style={styles.detailsBannerBatteryWrapper}>
                        <Text style={styles.detailsBannerText}>84%</Text>
                        <BatteryIcon />
                    </View>
                </View>
            </View>
            <View style={styles.controlButtonsWrapper}>
                <GestureHandlerRootView style={styles.container}>
                    <TapGestureHandler
                        onHandlerStateChange={handleForwardButtonEvent}
                        maxDurationMs={durationMs}
                    >
                        <View style={[styles.button, forwardButtonPressed && styles.buttonPressed]}>
                            <Text style={styles.buttonText}>Forward</Text>
                        </View>
                    </TapGestureHandler>

                    <TapGestureHandler
                        onHandlerStateChange={handleBackwardButtonEvent}
                        maxDurationMs={durationMs}
                    >
                        <View
                            style={[styles.button, backwardButtonPressed && styles.buttonPressed]}
                        >
                            <Text style={styles.buttonText}>Backward</Text>
                        </View>
                    </TapGestureHandler>
                    <View style={styles.horizontalControl}>
                        <TapGestureHandler
                            onHandlerStateChange={handleLeftButtonEvent}
                            maxDurationMs={99999}
                        >
                            <View
                                style={[styles.button, leftButtonPressed && styles.buttonPressed]}
                            >
                                <Text style={styles.buttonText}>Left</Text>
                            </View>
                        </TapGestureHandler>

                        <TapGestureHandler
                            onHandlerStateChange={handleRightButtonEvent}
                            maxDurationMs={99999}
                        >
                            <View
                                style={[styles.button, rightButtonPressed && styles.buttonPressed]}
                            >
                                <Text style={styles.buttonText}>Right</Text>
                            </View>
                        </TapGestureHandler>
                    </View>
                </GestureHandlerRootView>

                {/* <View>
                        <TouchableHighlight onPressIn={pressUp} onPressOut={outPress}>
                        </TouchableHighlight>
                        <View style={styles.horizontalControl}>
                            <TouchableHighlight onPressIn={pressLeft} onPressOut={outPress}>
                    
                            </TouchableHighlight>
                            <TouchableHighlight onPressIn={pressRight} onPressOut={outPress}>
                        
                            </TouchableHighlight>
                        </View>
                        <TouchableHighlight onPressIn={pressDown} onPressOut={outPress}>
                
                        </TouchableHighlight>
                    </View> */}

                {/* <View>

                </View>
                <View style={styles.horizontalControl}>

                </View> */}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: Colors.white,
        height: 100,
        justifyContent: 'center',
        margin: 10,
        width: 100,
    },
    buttonPressed: {
        backgroundColor: Colors.primary,
    },
    buttonText: {
        fontSize: 20,
    },
    chrono: {
        alignItems: 'center',
        backgroundColor: Colors.white,
        borderColor: Colors.primary,
        borderRadius: 100,
        borderWidth: 4,
        height: 76,
        justifyContent: 'center',
        position: 'absolute',
        top: '-8%',
        width: 76,
        zIndex: 4,
    },
    chronoText: {
        color: Colors.primary,
        fontWeight: 'bold',
    },
    container: {
        alignItems: 'center',
        flex: 1,
        padding: 16,
        width: '100%',
    },
    // controlButton: {
    //     margin: 10,
    // },
    controlButtonsWrapper: {
        alignItems: 'center',
        flexDirection: 'row',
        height: 248,
        justifyContent: 'space-around',
        width: '100%',
    },
    controlScreen: {
        alignItems: 'center',
        borderColor: Colors.primary,
        borderRadius: 32,
        borderWidth: 6,
        justifyContent: 'center',
        marginBottom: 28,
        minHeight: 352,
        width: '100%',
    },
    detailsBanner: {
        alignItems: 'center',
        backgroundColor: Colors.greyBanner,
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        flexDirection: 'row',
        height: 30,
        justifyContent: 'space-between',
        left: -1,
        paddingHorizontal: 20,
        position: 'absolute',
        right: 0,
        top: -1,
        zIndex: -6,
    },
    detailsBannerBatteryWrapper: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginHorizontal: 5,
    },
    detailsBannerText: {
        color: Colors.white,
        marginBottom: 2,
        marginHorizontal: 3,
    },

    horizontalControl: {
        flexDirection: 'row',
    },
    // rotatedBackButton: {
    //     transform: [{ rotate: '60deg' }],
    // },
    // rotatedLeftButton: {
    //     transform: [{ rotate: '30deg' }],
    // },
    // rotatedRightButton: {
    //     transform: [{ rotate: '90deg' }],
    // },
});
