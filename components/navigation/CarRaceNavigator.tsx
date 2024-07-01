import React from 'react';
import CarRace from '../../app/(tabs)/carRace';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function CarRaceStackScreen() {
    const CarRaceStack = createNativeStackNavigator();

    return (
        <CarRaceStack.Navigator>
            <CarRaceStack.Screen name="Course" component={CarRace} />
        </CarRaceStack.Navigator>
    );
}
