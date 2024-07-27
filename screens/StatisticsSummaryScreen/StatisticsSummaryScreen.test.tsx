import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, screen } from '@testing-library/react-native';
import React from 'react';

import StatisticsSummaryScreen from './StatisticsSummaryScreen';

import { useGetRacesByDate } from '@/api/ressources/races/races';
import {
    getRacesByDateApiResponse,
    socketConnectedResponse,
    socketDisconnectedResponse,
} from '@/api/ressources/races/races.fixture';
import { useSocket } from '@/shared/providers/SocketContext';

jest.mock('@/api/ressources/races/races', () => ({
    useGetRacesByDate: jest.fn(),
}));

jest.mock('@/shared/providers/SocketContext', () => ({
    useSocket: jest.fn(),
}));

describe('StatisticsSummaryScreen', () => {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                retry: false,
            },
        },
    });

    const Stack = createNativeStackNavigator();

    const WrappedStatisticsSummaryScreen = () => (
        <QueryClientProvider client={queryClient}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="StatisticsSummary"
                        component={StatisticsSummaryScreen}
                        options={{ title: 'Statistiques' }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </QueryClientProvider>
    );

    it('A player opens the app and sees the statistics summary screen. The car is not connected to the socket, so it sees the "Déconnecté" badge.', async () => {
        (useGetRacesByDate as jest.Mock).mockReturnValue({
            data: getRacesByDateApiResponse,
        });

        (useSocket as jest.Mock).mockReturnValue(socketDisconnectedResponse);

        render(<WrappedStatisticsSummaryScreen />);

        expect(screen.findByText('Statistiques')).toBeTruthy();

        expect(screen.getByText('Déconnecté')).toBeTruthy();
    });

    it('A player opens the app and sees the statistics summary screen. The car is connected to the socket, so it sees the "Connecté" badge.', async () => {
        (useGetRacesByDate as jest.Mock).mockReturnValue({
            data: getRacesByDateApiResponse,
        });

        (useSocket as jest.Mock).mockReturnValue(socketConnectedResponse);

        render(<WrappedStatisticsSummaryScreen />);

        expect(screen.findByText('Statistiques')).toBeTruthy();

        expect(screen.getByText('Connecté')).toBeTruthy();
    });
});
