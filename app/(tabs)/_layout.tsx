import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import { TouchableOpacity } from 'react-native';

import CarRaceNavigator from './CarRaceNavigator';
import HomeStackNavigator from './HomeStackNavigator';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { useSocket } from '@/shared/providers/SocketContext';
import Colors from '@/styles/constants/Colors';

export default function TabLayout() {
    const Tab = createBottomTabNavigator();
    const { socket } = useSocket();
    console.log('🚀 ~ TabLayout ~ socket:', socket);

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: Colors.primary,
                headerShown: false,
                tabBarShowLabel: false,
            }}
        >
            <Tab.Screen
                name="HomeStackNavigator"
                component={HomeStackNavigator}
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
                name="CarRaceNavigator"
                component={CarRaceNavigator}
                options={{
                    title: 'Course',
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon name={focused ? 'car' : 'car-outline'} color={color} />
                    ),
                    tabBarButton: (props) => <TouchableOpacity {...props} disabled={!socket} />,
                }}
            />
        </Tab.Navigator>
    );
}
