export const socketDisconnectedResponse = {
    socket: {
        readyState: 0,
    },
};
export const socketConnectedResponse = {
    socket: {
        readyState: 1,
    },
};

export const getRacesByDateApiResponse = {
    data: [
        {
            date: '2024-07-05',
            races: [
                {
                    id: 10,
                    timestamp: '2024-07-05T15:44:48.000Z',
                    start_Time: '2024-07-05T15:44:48.000Z',
                    end_Time: '2024-07-05T15:59:48.000Z',
                    distance: 300,
                    speeds: [
                        {
                            id: 10,
                            speeds: [
                                {
                                    date: '2024-07-11 18:00:00',
                                    speed: 10,
                                },
                                {
                                    date: '2024-07-11 18:10:00',
                                    speed: 12,
                                },
                            ],
                            max_Speed: 12,
                            average_Speed: 11,
                            timestamp: '2024-07-05T15:44:48.000Z',
                            raceId: 10,
                        },
                    ],
                    battery: [],
                },
            ],
        },
        {
            date: '2024-07-04',
            races: [
                {
                    id: 9,
                    timestamp: '2024-07-04T12:44:48.000Z',
                    start_Time: '2024-07-04T12:44:48.000Z',
                    end_Time: '2024-07-04T15:44:48.000Z',
                    distance: 3200,
                    speeds: [
                        {
                            id: 9,
                            speeds: [
                                {
                                    date: '2024-07-11 18:00:00',
                                    speed: 14,
                                },
                                {
                                    date: '2024-07-11 18:05:00',
                                    speed: 16,
                                },
                            ],
                            max_Speed: 16,
                            average_Speed: 15,
                            timestamp: '2024-07-04T12:58:08.000Z',
                            raceId: 9,
                        },
                    ],
                    battery: [],
                },
            ],
        },
    ],
};
