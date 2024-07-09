import { useQuery } from '@tanstack/react-query';

export const useGetRaces = () => {
    const API_KEY = process.env.EXPO_PUBLIC_API_KEY;
    const API_URL = process.env.EXPO_PUBLIC_API_URL;

    return useQuery({
        queryKey: ['races', API_KEY, API_URL],
        queryFn: () =>
            fetch(`${API_URL}/race/all`, {
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
