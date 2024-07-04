import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type ScreenStackNavigatorParamList = {
    MainStatistics: undefined;
    CarRaceStatisticDetails: undefined;
    CarRace: undefined;
};
export type ScreenStackBottomNavigatorParamList = {
    MainStatistics: undefined;
    CarRaceStatisticDetails: undefined;
    CarRaceNavigator: undefined;
};

export type ScreenStackNavigatorProps = NativeStackNavigationProp<ScreenStackNavigatorParamList>;

export type ScreenStackBottomNavigatorProps =
    NativeStackNavigationProp<ScreenStackBottomNavigatorParamList>;
