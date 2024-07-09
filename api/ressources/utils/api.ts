const makeApiCall = async (input: URL | RequestInfo, init?: RequestInit) => {
    const response = await fetch(input, init);

    return response.json();
};

export const techRaceApiCall = (pathname: string, init?: RequestInit) => {
    const API_KEY = process.env.EXPO_PUBLIC_API_KEY;
    const API_URL = process.env.EXPO_PUBLIC_API_URL;

    return makeApiCall(`${API_URL}${pathname}`, {
        ...init,
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': `${API_KEY}`,
        },
    });
};
