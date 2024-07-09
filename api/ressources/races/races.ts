import { useQuery } from '@tanstack/react-query';

import { techRaceApiCall } from '../utils/api';

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
