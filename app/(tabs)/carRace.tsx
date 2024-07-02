import { StyleSheet, View } from 'react-native';

import CarRace from '@/screen/carRace.tsx';

export default function CarRaceTab() {
    return (
        <View style={styles.container}>
            <CarRace></CarRace>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
});
