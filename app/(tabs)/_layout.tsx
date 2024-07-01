import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import Colors from '@/styles/constants/Colors';

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors.primary,
                headerShown: true,
                tabBarShowLabel: false,
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Statistiques',
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon
                            name={focused ? 'bar-chart' : 'bar-chart-outline'}
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="carRace"
                options={{
                    title: 'Course',
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon name={focused ? 'car' : 'car-outline'} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="carRaceStatisticDetails"
                options={{
                    title: 'Course',
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon name={focused ? 'car' : 'car-outline'} color={color} />
                    ),
                }}
            />
        </Tabs>
    );
}
