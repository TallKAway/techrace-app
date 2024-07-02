type StatisticsDetails = {
    distance: number;
    end_Time: string;
    id: number;
    speeds: Speed[];
    start_Time: string;
    timestamp: string;
};

type Speed = {
    average_Speed: number;
    id: number;
    max_Speed: number;
    raceId: number;
    speed: number;
    timestamp: string;
};

export type StatisticsDetailsElementsResponse = {
    data: StatisticsDetails;
};
