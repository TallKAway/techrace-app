import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import StatisticsSummaryScreen from '../../screens/StatisticsSummaryScreen/StatisticsSummaryScreen';

export default function HomeStackNavigator() {
    const HomeStack = createNativeStackNavigator();

    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                name="Statistiques"
                component={StatisticsSummaryScreen}
                options={{
                    headerShadowVisible: false,
                    headerShown: false,
                }}
            />
            {/* TODO : Ajouter ici les différentes Stacks de Home */}
        </HomeStack.Navigator>
    );
}
