interface SpeedEntry {
    date: string;
    speed: number;
}

interface SpeedDetail {
    id: number;
    speeds: SpeedEntry[];
    max_Speed: number;
    average_Speed: number;
    timestamp: string;
    raceId: number;
}

interface Data {
    id: number;
    timestamp: string;
    start_Time: string;
    end_Time: string;
    distance: number;
    speeds: SpeedDetail[];
}

export type StatisticsDetailsElementsResponse = {
    data: Data;
};
