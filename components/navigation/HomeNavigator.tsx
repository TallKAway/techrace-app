import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import HomeScreen from '../../app/(tabs)/index';

export default function HomeStackScreen() {
    const HomeStack = createNativeStackNavigator();

    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                name="Statistiques"
                component={HomeScreen}
                options={{
                    headerShadowVisible: false,
                }}
            />
            {/* TODO : Ajouter ici les différentes Stacks de Home */}
        </HomeStack.Navigator>
    );
}
