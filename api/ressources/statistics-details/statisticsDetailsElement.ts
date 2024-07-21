import { useQuery } from '@tanstack/react-query';

import { techRaceApiCall } from '../utils/api';

import { StatisticsDetailsElementsResponse } from './types';

export const useGetStatisticsDetailsElements = (id: number) => {
    const API_KEY = process.env.EXPO_PUBLIC_API_KEY;
    const API_URL = process.env.EXPO_PUBLIC_API_URL;

    return useQuery<StatisticsDetailsElementsResponse>({
        queryKey: ['statisticsDetails', id, API_KEY, API_URL],

        queryFn: () =>
            techRaceApiCall(`/race/${id}`, {
                body: null,
                method: 'GET',
            }),
    });
};
