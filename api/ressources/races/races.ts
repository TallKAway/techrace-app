import { useQuery } from '@tanstack/react-query';

export const useGetRaces = () =>
    useQuery({
        queryKey: ['races'],
        queryFn: () =>
            fetch('/api/races', {
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
