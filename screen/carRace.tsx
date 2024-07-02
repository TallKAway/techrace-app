import { StyleSheet, View, Text } from 'react-native';

import ControlButton from '@/components/design-system/ControlButton';
import Colors from '@/styles/constants/Colors';

export default function CarRaceScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.controlScreen}>
                <Text>Aucun signal</Text>
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
});
