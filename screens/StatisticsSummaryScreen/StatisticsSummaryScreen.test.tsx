import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, screen } from '@testing-library/react-native';

import StatisticsSummaryScreen from './StatisticsSummaryScreen';


describe('StatisticsSummaryScreen', () => {
    // beforeEach(() => {
    // });
    // afterEach(() => {
    //     jest.resetAllMocks();
    // });

    it('A player opens the app and sees the statistics summary screen. The car is not connected to the socket, so it sees the "Déconnecté" badge.', () => {
        // set up queryclient
        const queryClient = new QueryClient({
            defaultOptions: {
                queries: {
                    retry: false,
                },
            },
        });

        const Stack = createNativeStackNavigator();
        // render le composant wrapped with NavigationContainer
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

        render(<WrappedStatisticsSummaryScreen />);
        // vérifier que le titre de l'écran est "Statistiques"
        expect(screen.getByText('Statistiques')).toBeTruthy();
        // vérifier que le badge est déconnecté est présent
    });

    it.todo(
        'A player opens the app and sees the statistics summary screen. The car is connected to the socket, so it sees the "Connecté" badge.'
    );
});
