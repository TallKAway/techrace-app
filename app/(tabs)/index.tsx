import { StyleSheet, View } from 'react-native';

import { useGetRaces } from '@/api/ressources/races/races';

export default function HomeScreen() {
    // TODO : Fetch data from the API, this is an example of how to use the useGetRaces hook
    const { data } = useGetRaces();
    console.log(data);

    return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
});

// const HomeStack = createNativeStackNavigator();

// export default function HomeStackScreen() {
//     return (
//         <HomeStack.Navigator>
//             <HomeStack.Screen name="Home" component={HomeScreen} />
//             <HomeStack.Screen name="Details" component={CarRaceStatisticDetails} />
//         </HomeStack.Navigator>
//     );
// }
