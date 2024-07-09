import { StyleSheet, View, Text } from 'react-native';

import ControlButton from '@/components/design-system/ControlButton';
import BatteryIcon from '@/components/design-system/icons/Battery';
import Colors from '@/styles/constants/Colors';

export default function CarRaceScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.controlScreen}>
                <View style={styles.detailsBanner}>
                    <Text style={styles.detailsBannerText}>0:03:53s</Text>
                    <View style={styles.detailsBannerBatteryWrapper}>
                        <BatteryIcon />
                        <Text style={styles.detailsBannerText}>84%</Text>
                    </View>
                </View>
                <View style={styles.chrono}>
                    <Text style={styles.chronoText}>0</Text>
                    <Text style={styles.chronoText}>Kmh</Text>
                </View>
            </View>
            <View style={styles.controlButtonsWrapper}>
                <View>
                    <ControlButton direction="up" style={styles.controlButton} />
                    <ControlButton
                        direction="down"
                        style={[styles.controlButton, styles.rotatedBackButton]}
                    />
                </View>
                <ControlButton
                    direction="left"
                    style={[styles.controlButton, styles.rotatedLeftButton]}
                />
                <ControlButton
                    direction="right"
                    style={[styles.controlButton, styles.rotatedRightButton]}
                />
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
        justifyContent: 'space-between',
        padding: 16,
        width: '100%',
    },
    controlButton: {
        margin: 10,
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
        minHeight: 352,
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
