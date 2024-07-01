import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../app/(tabs)/index';
import CarRaceStatisticDetails from '../../app/(tabs)/carRaceStatisticDetails';
export default function HomeStackScreen() {
    const HomeStack = createNativeStackNavigator();
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Statistiques" component={HomeScreen} />
            <HomeStack.Screen
                name="CarRaceStatisticDetails"
                component={CarRaceStatisticDetails}
                options={{ title: 'Details' }}
            />
        </HomeStack.Navigator>
    );
}
