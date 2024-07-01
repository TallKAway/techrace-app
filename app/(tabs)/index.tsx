import { StyleSheet, View, Text, Button } from 'react-native';

import { useGetRaces } from '@/api/ressources/races/races';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { ScreenStackBottomNavigatorProps } from '../domains/navigation';

function HomeScreen() {
    // TODO : Fetch data from the API, this is an example of how to use the useGetRaces hook
    const { data } = useGetRaces();
    console.log(data);

    const navigation = useNavigation<ScreenStackBottomNavigatorProps>();

    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('CarRaceStatisticDetails')}
            />
        </View>
    );
}

function CarRaceStatisticDetails() {
    return (
        <View style={styles.container}>
            <Text>Car Race Details Screen</Text>
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
const HomeStack = createNativeStackNavigator();
export default function HomeStackScreen() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={HomeScreen} />
            <HomeStack.Screen name="Details" component={CarRaceStatisticDetails} />
        </HomeStack.Navigator>
    );
}
