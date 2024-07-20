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
interface BatteryLevel {
    date: string;
    battery: number;
}

interface BatteryActivity {
    id: number;
    battery_level: BatteryLevel[];
    battery_consumed: number;
}

interface Data {
    id: number;
    timestamp: string;
    start_Time: string;
    end_Time: string;
    distance: number;
    speeds: SpeedDetail[];
    battery: BatteryActivity[];
}

export type StatisticsDetailsElementsResponse = {
    data: Data;
};
