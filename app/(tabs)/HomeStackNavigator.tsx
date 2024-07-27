import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import StatisticsDetailsScreen from '../../screens/StatisticsDetailsScreen/StatisticsDetailsScreen';
import StatisticsSummaryScreen from '../../screens/StatisticsSummaryScreen/StatisticsSummaryScreen';

export default function HomeStackNavigator() {
    const HomeStack = createNativeStackNavigator();

    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Statistiques" component={StatisticsSummaryScreen} />
            {/* TODO : Ajouter ici les différentes Stacks de Home */}
            <HomeStack.Screen
                name="StatisticsDetails"
                component={StatisticsDetailsScreen}
                options={{
                    headerBackTitle: 'Retour',
                }}
            />
        </HomeStack.Navigator>
    );
}
