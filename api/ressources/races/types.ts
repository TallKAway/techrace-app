export type Race = {
    id: number;
    timestamp: string;
    start_Time: string;
    end_Time: string;
    distance: number;
};

export type RacesByDateResponse = {
    data: {
        date: string;
        races: Race[];
    }[];
};
