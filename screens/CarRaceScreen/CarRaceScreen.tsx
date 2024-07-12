import 'react-native-gesture-handler';
import { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';

import {
    GestureHandlerRootView,
    GestureHandlerStateChangeEvent,
    State,
    TapGestureHandler,
} from 'react-native-gesture-handler';
import { WebView } from 'react-native-webview';

import BatteryIcon from '@/components/design-system/icons/Battery';
import { useSocket } from '@/shared/providers/SocketContext';
import Colors from '@/styles/constants/Colors';

const durationMs = 99999;
const maxWheelValue = 4069;

export default function CarRaceScreen() {
    const { socket, speed, battery, video_url } = useSocket();

    const [forwardButtonPressed, setForwardButtonPressed] = useState(false);
    const [backwardButtonPressed, setBackwardButtonPressed] = useState(false);

    const [leftButtonPressed, setLeftButtonPressed] = useState(false);
    const [rightButtonPressed, setRightButtonPressed] = useState(false);

    const handleForwardButtonEvent = (event: GestureHandlerStateChangeEvent) => {
        if (event.nativeEvent.state === State.BEGAN) {
            setForwardButtonPressed(true);
        } else if (
            event.nativeEvent.state === State.END ||
            event.nativeEvent.state === State.FAILED ||
            event.nativeEvent.state === State.CANCELLED
        ) {
            setForwardButtonPressed(false);
        }
    };

    const handleBackwardButtonEvent = (event: GestureHandlerStateChangeEvent) => {
        if (event.nativeEvent.state === State.BEGAN) {
            setBackwardButtonPressed(true);
        } else if (
            event.nativeEvent.state === State.END ||
            event.nativeEvent.state === State.FAILED ||
            event.nativeEvent.state === State.CANCELLED
        ) {
            setBackwardButtonPressed(false);
        }
    };

    const handleLeftButtonEvent = (event: GestureHandlerStateChangeEvent) => {
        if (event.nativeEvent.state === State.BEGAN) {
            setLeftButtonPressed(true);
        } else if (
            event.nativeEvent.state === State.END ||
            event.nativeEvent.state === State.FAILED ||
            event.nativeEvent.state === State.CANCELLED
        ) {
            setLeftButtonPressed(false);
        }
    };

    const handleRightButtonEvent = (event: GestureHandlerStateChangeEvent) => {
        if (event.nativeEvent.state === State.BEGAN) {
            setRightButtonPressed(true);
        } else if (
            event.nativeEvent.state === State.END ||
            event.nativeEvent.state === State.FAILED ||
            event.nativeEvent.state === State.CANCELLED
        ) {
            setRightButtonPressed(false);
        }
    };

    useEffect(() => {
        carMoveControl();
    }, [forwardButtonPressed, backwardButtonPressed, rightButtonPressed, leftButtonPressed]);

    // console.log('videoUrl', videoUrl);
    const carMoveControl = () => {
        let frontLeftWheelValue = 0;
        let backLeftWheelValue = 0;
        let frontRightWheelValue = 0;
        let backRightWheelValue = 0;

        if (
            forwardButtonPressed ||
            backwardButtonPressed ||
            rightButtonPressed ||
            leftButtonPressed
        ) {
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
            if (backwardButtonPressed) {
                frontLeftWheelValue = -maxWheelValue;
                frontRightWheelValue = -maxWheelValue;
                backRightWheelValue = -maxWheelValue;
                backLeftWheelValue = -maxWheelValue;
            }
            // Turn Left
            if (leftButtonPressed) {
                frontLeftWheelValue = 0;
                frontRightWheelValue = maxWheelValue;
                backRightWheelValue = maxWheelValue;
            }
            //backLeftWheelValue = 0;ght
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
        try {
            socket?.send(JSON.stringify(speedData));
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.controlScreen}>
                <View style={styles.detailsBanner}>
                    <Text style={styles.detailsBannerText}>0:03:53s</Text>
                    <View style={styles.detailsBannerBatteryWrapper}>
                        <BatteryIcon />
                        <Text style={styles.detailsBannerText}>{battery}%</Text>
                    </View>
                </View>
                <View style={styles.chrono}>
                    <Text style={styles.chronoText}>{speed}</Text>
                    <Text style={styles.chronoText}>Cm/s</Text>
                </View>
                <View>
                    {video_url ? (
                        <WebView
                            style={styles.video}
                            scalesPageToFit={true}
                            source={{ uri: video_url }}
                        />
                    ) : (
                        <ActivityIndicator size="large" color="#0000ff" />
                    )}
                </View>
            </View>

            <GestureHandlerRootView style={styles.controlButtonsWrapper}>
                <View>
                    <TapGestureHandler
                        onHandlerStateChange={handleForwardButtonEvent}
                        maxDurationMs={durationMs}
                    >
                        <View style={[styles.button, forwardButtonPressed && styles.buttonPressed]}>
                            <View
                                style={[
                                    styles.triangle,
                                    forwardButtonPressed && styles.buttonPressedTriangle,
                                ]}
                            ></View>
                        </View>
                    </TapGestureHandler>
                    <TapGestureHandler
                        onHandlerStateChange={handleBackwardButtonEvent}
                        maxDurationMs={durationMs}
                    >
                        <View
                            style={[
                                styles.button,
                                backwardButtonPressed && styles.buttonPressed,
                                styles.rotatedBackButton,
                            ]}
                        >
                            <View
                                style={[
                                    styles.triangle,
                                    backwardButtonPressed && styles.buttonPressedTriangle,
                                ]}
                            ></View>
                        </View>
                    </TapGestureHandler>
                </View>
                <View style={styles.horizontalControl}>
                    <TapGestureHandler
                        onHandlerStateChange={handleLeftButtonEvent}
                        maxDurationMs={durationMs}
                    >
                        <View
                            style={[
                                styles.button,
                                leftButtonPressed && styles.buttonPressed,
                                styles.rotatedLeftButton,
                            ]}
                        >
                            <View
                                style={[
                                    styles.triangle,
                                    leftButtonPressed && styles.buttonPressedTriangle,
                                ]}
                            ></View>
                        </View>
                    </TapGestureHandler>
                    <TapGestureHandler
                        onHandlerStateChange={handleRightButtonEvent}
                        maxDurationMs={durationMs}
                    >
                        <View
                            style={[
                                styles.button,
                                rightButtonPressed && styles.buttonPressed,
                                styles.rotatedRightButton,
                            ]}
                        >
                            <View
                                style={[
                                    styles.triangle,
                                    rightButtonPressed && styles.buttonPressedTriangle,
                                ]}
                            ></View>
                        </View>
                    </TapGestureHandler>
                </View>
            </GestureHandlerRootView>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        borderColor: Colors.primary,
        borderRadius: 100,
        borderWidth: 2,
        height: 86,
        justifyContent: 'center',
        margin: 10,
        width: 86,
    },
    buttonPressed: {
        backgroundColor: Colors.primary,
    },
    buttonPressedTriangle: {
        borderBottomColor: Colors.white,
    },
    chrono: {
        alignItems: 'center',
        backgroundColor: Colors.white,
        borderColor: Colors.primary,
        borderRadius: 100,
        borderWidth: 2,
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
        height: 20,
        justifyContent: 'space-between',
        padding: 16,
        width: '100%',
    },
    controlButtonsWrapper: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
    },
    controlScreen: {
        alignItems: 'center',
        borderColor: Colors.primary,
        borderRadius: 32,
        borderWidth: 2,
        justifyContent: 'center',
        marginBottom: 28,
        marginTop: 10,
        maxHeight: 282,
        width: '100%',
    },
    detailsBanner: {
        alignItems: 'center',
        flexDirection: 'row',
        height: 30,
        justifyContent: 'space-between',
        left: -1,
        marginHorizontal: 20,
        paddingHorizontal: 20,
        position: 'absolute',
        right: 0,
        top: -1,
        zIndex: -6,
    },
    detailsBannerBatteryWrapper: {
        alignItems: 'center',
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginHorizontal: 5,
    },
    detailsBannerText: {
        color: Colors.primary,
        marginBottom: 2,
        marginHorizontal: 3,
    },

    horizontalControl: {
        flexDirection: 'row',
    },
    rotatedBackButton: {
        transform: [{ rotate: '60deg' }],
    },
    rotatedLeftButton: {
        transform: [{ rotate: '30deg' }],
    },
    rotatedRightButton: {
        transform: [{ rotate: '90deg' }],
    },
    triangle: {
        borderBottomColor: Colors.primary,
        borderBottomWidth: 30,
        borderLeftColor: Colors.transparent,
        borderLeftWidth: 17,
        borderRightColor: Colors.transparent,
        borderRightWidth: 17,
        marginBottom: 7,
    },
    video: {
        borderRadius: 12,
        height: 10,
        marginTop: 40,
        maxHeight: 240,
        overflow: 'hidden',
        width: 300,
    },
});
