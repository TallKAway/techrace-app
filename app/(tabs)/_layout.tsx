import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeStackScreen from '../(tabs)/index';

export default function TabLayout() {
    const Tab = createBottomTabNavigator();

    return (
        // <Tabs
        //     screenOptions={{
        //         tabBarActiveTintColor: Colors.primary,
        //         headerShown: true,
        //         tabBarShowLabel: false,
        //     }}
        // >
        //     <Tabs.Screen
        //         name="index"
        //         options={{
        //             title: 'Statistiques',
        //             tabBarIcon: ({ color, focused }) => (
        //                 <TabBarIcon
        //                     name={focused ? 'bar-chart' : 'bar-chart-outline'}
        //                     color={color}
        //                 />
        //             ),
        //         }}
        //     />
        //     <Tabs.Screen
        //         name="carRace"
        //         options={{
        //             title: 'Course',
        //             tabBarIcon: ({ color, focused }) => (
        //                 <TabBarIcon name={focused ? 'car' : 'car-outline'} color={color} />
        //             ),
        //         }}
        //     />
        //     <Tabs.Screen
        //         name="carRaceStatisticDetails"
        //         options={{
        //             title: 'Course',
        //             tabBarIcon: ({ color, focused }) => (
        //                 <TabBarIcon name={focused ? 'car' : 'car-outline'} color={color} />
        //             ),
        //         }}
        //     />
        // </Tabs>

        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen
                name="HomeStack"
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
            {/* <Tab.Screen name="SettingsStack" component={SettingsStackScreen} /> */}
        </Tab.Navigator>
    );
}
