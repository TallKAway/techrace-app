import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type ScreenStackNavigatorParamList = {
    MainStatistics: undefined;
    StatisticsDetails: undefined;
    CarRace: undefined;
};
export type ScreenStackBottomNavigatorParamList = {
    MainStatistics: undefined;
    StatisticsDetails: undefined;
    CarRaceNavigator: undefined;
};

export type ScreenStackNavigatorProps = NativeStackNavigationProp<ScreenStackNavigatorParamList>;

export type ScreenStackBottomNavigatorProps =
    NativeStackNavigationProp<ScreenStackBottomNavigatorParamList>;
