import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, screen } from '@testing-library/react-native';
import React from 'react';

import StatisticsDetailsScreen from './StatisticsDetailsScreen';

import { useGetStatisticsDetailsElements } from '@/api/ressources/statistics-details/statisticsDetailsElement';
import { getStatisticsDetailsElementsApiResponse } from '@/api/ressources/statistics-details/statisticsDetailsElement.fixture';

jest.mock('@/api/ressources/statistics-details/statisticsDetailsElement', () => ({
    useGetStatisticsDetailsElements: jest.fn(),
}));

describe('StatisticsDetailsScreen', () => {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                retry: false,
            },
        },
    });

    const Stack = createNativeStackNavigator();

    const WrappedStatisticsDetailsScreen = () => (
        <QueryClientProvider client={queryClient}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="StatisticsDetails"
                        component={StatisticsDetailsScreen}
                        options={{ headerBackTitle: 'retour' }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </QueryClientProvider>
    );

    it('A player click on the summary card and sees statistics details of "Jeudi 4 juillet 2024". This shows also the started date of the race "Commencé à 14:44".', async () => {
        (useGetStatisticsDetailsElements as jest.Mock).mockReturnValue({
            data: getStatisticsDetailsElementsApiResponse,
        });

        render(<WrappedStatisticsDetailsScreen />);

        expect(await screen.findByText('Jeudi 4 juillet 2024')).toBeTruthy();

        expect(screen.getByText('Commencé à 14:44')).toBeTruthy();
    });

    it('A player click on the summary card and sees statistics details of "Vendredi 5 juillet 2024". This shows also the started date of the race "Commencé à 17:44".', async () => {
        (useGetStatisticsDetailsElements as jest.Mock).mockReturnValue({
            data: getStatisticsDetailsElementsApiResponse,
        });

        render(<WrappedStatisticsDetailsScreen />);

        expect(await screen.findByText('Vendredi 5 juillet 2024')).toBeTruthy();

        expect(screen.getByText('Commencé à 17:44')).toBeTruthy();
    });
});
