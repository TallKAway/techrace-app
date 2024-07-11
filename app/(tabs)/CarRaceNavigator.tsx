import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import CarRaceScreen from '../../screens/CarRaceScreen/CarRaceScreen';

export default function CarRaceNavigator() {
    const CarRaceStack = createNativeStackNavigator();

    return (
        <CarRaceStack.Navigator>
            <CarRaceStack.Screen
                name="CarRace"
                component={CarRaceScreen}
                options={{
                    headerStyle: {
                        backgroundColor: 'transparent',
                    },
                }}
            />
        </CarRaceStack.Navigator>
    );
}
