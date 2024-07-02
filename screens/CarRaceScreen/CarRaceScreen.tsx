import { StyleSheet, View, Text } from 'react-native';

import ControlButton from '@/components/design-system/ControlButton';
import BatteryIcon from '@/components/design-system/icons/Battery';
import Colors from '@/styles/constants/Colors';

export default function CarRaceScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.controlScreen}>
                <View style={styles.chrono}>
                    <Text style={styles.chronoText}>0</Text>
                    <Text style={styles.chronoText}>Kmh</Text>
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
                    <ControlButton style={styles.controlButton} />
                    <ControlButton style={[styles.controlButton, styles.rotatedBackButton]} />
                </View>
                <View style={styles.horizontalControl}>
                    <ControlButton style={[styles.controlButton, styles.rotatedLeftButton]} />
                    <ControlButton style={[styles.controlButton, styles.rotatedRightButton]} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        margin: 25,
        width: '100%',
    },
    // eslint-disable-next-line react-native/no-color-literals, react-native/no-unused-styles
    controlScreen: {
        alignItems: 'center',
        borderColor: Colors.primary,
        borderRadius: 32,
        borderWidth: 6,
        height: '51.64%',
        justifyContent: 'center',
        marginBottom: 28,
        marginTop: 79, // TODO : temporary until connected banner
        width: '90%',
    },
    // eslint-disable-next-line react-native/no-color-literals, react-native/no-unused-styles, react-native/sort-styles
    controlButtonsWrapper: {
        alignItems: 'center',
        flexDirection: 'row',
        height: '36.39%',
        justifyContent: 'space-around',
        width: '90%',
    },
    horizontalControl: {
        flexDirection: 'row',
    },
    rotatedBackButton: {
        transform: [{ rotate: '60deg' }],
    },
    rotatedRightButton: {
        transform: [{ rotate: '90deg' }],
    },
    rotatedLeftButton: {
        transform: [{ rotate: '30deg' }],
    },
    // eslint-disable-next-line react-native/no-unused-styles
    controlButton: {
        margin: 10,
    },
    // eslint-disable-next-line react-native/no-color-literals
    chrono: {
        alignItems: 'center',
        backgroundColor: Colors.white,
        borderColor: Colors.primary,
        borderRadius: 100,
        borderWidth: 4,
        height: 76,
        justifyContent: 'center',
        left: '38%',
        position: 'absolute',
        top: '-8%',
        width: 76,
        zIndex: 4,
    },
    chronoText: {
        color: Colors.primary,
        fontWeight: 'bold',
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
    detailsBannerText: {
        color: Colors.white,
        marginBottom: 2,
        marginHorizontal: 3,
    },
    detailsBannerBatteryWrapper: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginHorizontal: 5,
    },
});
