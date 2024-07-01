import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type ScreenStackNavigatorParamList = {
    CarRaceStatisticDetails: undefined;
};
export type ScreenStackBottomNavigatorParamList = {
    MainStatistics: undefined;
    CarRaceStatisticDetails: undefined;
   
};

export type ScreenStackNavigatorProps = NativeStackNavigationProp<ScreenStackNavigatorParamList>;

export type ScreenStackBottomNavigatorProps =
    NativeStackNavigationProp<ScreenStackBottomNavigatorParamList>;