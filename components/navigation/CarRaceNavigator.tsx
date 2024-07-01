import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CarRace from '../../app/(tabs)/carRace';
export default function CarRaceStackScreen() {
    const CarRaceStack = createNativeStackNavigator();
    return (
        <CarRaceStack.Navigator>
            <CarRaceStack.Screen name="Course" component={CarRace} />
        </CarRaceStack.Navigator>
    );
}
