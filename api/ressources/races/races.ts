import { useQuery } from '@tanstack/react-query';

import { techRaceApiCall } from '../utils/api';

import { RacesByDateResponse } from './types';

export const useGetRaces = () => {
    return useQuery({
        queryKey: ['races'],
        queryFn: () =>
            techRaceApiCall('/race/all', {
                body: null,
                method: 'GET',
            }),
    });
};

export const useGetRacesByDate = () => {
    return useQuery<RacesByDateResponse>({
        queryKey: ['racesByDate'],
        queryFn: () =>
            techRaceApiCall('/race/all/sortedByDate', {
                body: null,
                method: 'GET',
            }),
    });
};
