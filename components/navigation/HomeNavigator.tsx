import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import CarRaceStatisticDetails from '../../app/(tabs)/carRaceStatisticDetails';
import HomeScreen from '../../app/(tabs)/index';

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
