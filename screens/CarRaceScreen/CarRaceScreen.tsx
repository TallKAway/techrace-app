// import { useState } from 'react';
import 'react-native-gesture-handler';
import { useState } from 'react';
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
import Colors from '@/styles/constants/Colors';

export default function CarRaceScreen() {
    // const pressUp = () => console.log('up');
    // const pressDown = () => console.log('down');

    // const pressLeft = () => console.log('left');

    // const pressRight = () => console.log('right');

    // const outPress = () => console.log('btn not pressed');

    const [button1Pressed, setButton1Pressed] = useState(false);
    const [button2Pressed, setButton2Pressed] = useState(false);

    const handleButton1Event = (event: GestureHandlerStateChangeEvent) => {
        if (event.nativeEvent.state === State.BEGAN) {
            setButton1Pressed(true);
        } else if (
            event.nativeEvent.state === State.END ||
            event.nativeEvent.state === State.FAILED ||
            event.nativeEvent.state === State.CANCELLED
        ) {
            setButton1Pressed(false);
        }
    };

    const handleButton2Event = (event: GestureHandlerStateChangeEvent) => {
        if (event.nativeEvent.state === State.BEGAN) {
            setButton2Pressed(true);
        } else if (
            event.nativeEvent.state === State.END ||
            event.nativeEvent.state === State.FAILED ||
            event.nativeEvent.state === State.CANCELLED
        ) {
            setButton2Pressed(false);
        }
    };

    console.log('btn 1', button1Pressed);
    console.log('btn 2', button2Pressed);

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
                    <TapGestureHandler onHandlerStateChange={handleButton1Event}>
                        <View style={[styles.button, button1Pressed && styles.buttonPressed]}>
                            <Text style={styles.buttonText}>Button 1</Text>
                        </View>
                    </TapGestureHandler>

                    <TapGestureHandler onHandlerStateChange={handleButton2Event}>
                        <View style={[styles.button, button2Pressed && styles.buttonPressed]}>
                            <Text style={styles.buttonText}>Button 2</Text>
                        </View>
                    </TapGestureHandler>
                </GestureHandlerRootView>

                {/* <View>
                        <TouchableHighlight onPressIn={pressUp} onPressOut={outPress}>
                            <ControlButton direction="forward" style={styles.controlButton} />
                        </TouchableHighlight>
                        <View style={styles.horizontalControl}>
                            <TouchableHighlight onPressIn={pressLeft} onPressOut={outPress}>
                                <ControlButton
                                    direction="left"
                                    style={[styles.controlButton, styles.rotatedLeftButton]}
                                />
                            </TouchableHighlight>
                            <TouchableHighlight onPressIn={pressRight} onPressOut={outPress}>
                                <ControlButton
                                    direction="right"
                                    style={[styles.controlButton, styles.rotatedRightButton]}
                                />
                            </TouchableHighlight>
                        </View>
                        <TouchableHighlight onPressIn={pressDown} onPressOut={outPress}>
                            <ControlButton
                                direction="backward"
                                style={[styles.controlButton, styles.rotatedBackButton]}
                            />
                        </TouchableHighlight>
                    </View> */}

                {/* <View>
                    <ControlButton
                        direction="forward"
                        setLeftRightDir={leftRightDirSetter}
                        setFowardBackwardDir={forwardBackwardDirSetter}
                        style={styles.controlButton}
                    />
                    <ControlButton
                        direction="backward"
                        setLeftRightDir={leftRightDirSetter}
                        setFowardBackwardDir={forwardBackwardDirSetter}
                        style={[styles.controlButton, styles.rotatedBackButton]}
                    />
                </View>
                <View style={styles.horizontalControl}>
                    <ControlButton
                        direction="left"
                        setLeftRightDir={leftRightDirSetter}
                        setFowardBackwardDir={forwardBackwardDirSetter}
                        style={[styles.controlButton, styles.rotatedLeftButton]}
                    />
                    <ControlButton
                        direction="right"
                        setLeftRightDir={leftRightDirSetter}
                        setFowardBackwardDir={forwardBackwardDirSetter}
                        style={[styles.controlButton, styles.rotatedRightButton]}
                    />
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

    // horizontalControl: {
    //     flexDirection: 'row',
    // },
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
