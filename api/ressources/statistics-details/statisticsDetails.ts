import { useQuery } from '@tanstack/react-query';

export const useGetStatisticsDetails = () =>
    useQuery({
        queryKey: ['statisticsDetails'],
        queryFn: () =>
            fetch('/api/statisticsDetails', {
                body: null,
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
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
