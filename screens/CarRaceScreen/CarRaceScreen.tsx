import { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import ControlButton from '@/components/design-system/ControlButton';
import BatteryIcon from '@/components/design-system/icons/Battery';
import Colors from '@/styles/constants/Colors';

export default function CarRaceScreen() {
    const [leftRightDir, setLeftRightDir] = useState('');
    const [forwardBackwardDir, setForwardBackwardDir] = useState('');

    const leftRightDirSetter = (direction: string) => {
        setLeftRightDir(direction);
    };

    const forwardBackwardDirSetter = (direction: string) => {
        setForwardBackwardDir(direction);
    };
    console.log('horizontal : ', leftRightDir);
    console.log('vertical : ', forwardBackwardDir);

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
                <View>
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
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
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
    controlButton: {
        margin: 10,
    },
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
    rotatedBackButton: {
        transform: [{ rotate: '60deg' }],
    },
    rotatedLeftButton: {
        transform: [{ rotate: '30deg' }],
    },
    rotatedRightButton: {
        transform: [{ rotate: '90deg' }],
    },
});
