import { useQuery } from '@tanstack/react-query';

import { StatisticsDetailsElementsResponse } from './types';

export const useGetStatisticsDetailsElements = (id: number) => {
    const API_KEY = process.env.EXPO_PUBLIC_API_KEY;
    const API_URL = process.env.EXPO_PUBLIC_API_URL;

    return useQuery<StatisticsDetailsElementsResponse>({
        queryKey: ['statisticsDetails', id, API_KEY, API_URL],
        queryFn: () =>
            fetch(`${API_URL}/race/${id}`, {
                body: null,
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': `${API_KEY}`,
                },
            }).then((response) => {
                if (!response.ok) {
                    throw {
                        response: response,
                        error: new Error(
                            `Error: ${response.url} ${response.status} ${response.statusText}`
                        ),
                    };
                }

                return response.json();
            }),
    });
};
