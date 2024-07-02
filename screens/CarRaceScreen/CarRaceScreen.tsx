import { StyleSheet, View, Text } from 'react-native';

export default function CarRaceScreen() {
    return (
        <View style={styles.container}>
            <Text>TEST</Text>
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
