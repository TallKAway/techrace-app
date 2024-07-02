import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import CarRaceStackScreen from '@/components/navigation/CarRaceNavigator';
import HomeStackScreen from '@/components/navigation/HomeNavigator';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import Colors from '@/styles/constants/Colors';

export default function TabLayout() {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: Colors.primary,
                headerShown: false,
                tabBarShowLabel: false,
            }}
        >
            <Tab.Screen
                name="MainStatistic"
                component={HomeStackScreen}
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
            <Tab.Screen
                name="CarRace"
                component={CarRaceStackScreen}
                options={{
                    title: 'Course',
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon name={focused ? 'car' : 'car-outline'} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}
