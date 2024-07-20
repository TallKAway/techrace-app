import { RouteProp, useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

import React, { useEffect, useState } from 'react';

import {
    SafeAreaView,
    Animated,
    StyleSheet,
    Text,
    View,
    NativeSyntheticEvent,
    NativeScrollEvent,
} from 'react-native';

import LineChartElement from '../../components/design-system/LineChart/LineChartElement';

import StatisticsElement from '../../components/design-system/StatisticsElement/StatisticsElement';
import Color from '../../styles/constants/Colors';

import Colors from '../../styles/constants/Colors';

import { useGetStatisticsDetailsElements } from '@/api/ressources/statistics-details/statisticsDetailsElement';

type RouteParams = {
    params: {
        id: number;
        date: string;
    };
};

const capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

const selectedDayFormatted = (date: string) =>
    new Date(date).toLocaleDateString('fr-FR', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

const raceStartTimeFormatted = (date: string) =>
    new Date(date).toLocaleTimeString('fr-FR', {
        hour: 'numeric',
        minute: 'numeric',
    });

export default function StatisticsDetailsScreen() {
    const navigation = useNavigation();
    const route = useRoute<RouteProp<RouteParams, 'params'>>();
    const { date, id } = route.params;
    const { data } = useGetStatisticsDetailsElements(id);

    const averageSpeedData = data?.data.speeds[0]?.speeds || [];
    const batteryActivityData = data?.data.battery[0]?.battery_level || [];
    console.log('🚀 ~ StatisticsDetailsScreen ~ batteryActivityData:', batteryActivityData);

    const [showHeader, setShowHeader] = useState(false);

    const scrollY = new Animated.Value(0);

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerShadowVisible: showHeader ? true : false,
            headerTitleStyle: {
                color: showHeader ? Colors.text : 'transparent',
            },
            title: capitalizeFirstLetter(selectedDayFormatted(date)),
        });
    }, [showHeader, navigation]);

    const animatedTitleOpacity = scrollY.interpolate({
        inputRange: [0, 50],
        outputRange: [1, 0],
        extrapolate: 'clamp',
    });

    const lineAverageSpeedData = {
        labels: averageSpeedData?.map(({ date }) =>
            new Date(date).toLocaleTimeString('fr-FR', {
                minute: 'numeric',
                second: 'numeric',
            })
        ),
        datasets: [
            {
                data: averageSpeedData?.map(({ speed }) => speed),
                strokeWidth: 1,
            },
        ],
    };

    const lineBatteryActictyData = {
        labels: batteryActivityData?.map(({ date }) =>
            new Date(date).toLocaleTimeString('fr-FR', {
                minute: 'numeric',
            })
        ),
        datasets: [
            {
                data: batteryActivityData?.map(({ battery }) => battery),
                strokeWidth: 1,
            },
        ],
    };

    const lineChartErrorData = {
        labels: ['no data', 'no data', 'no data', 'no data'],
        datasets: [
            {
                data: [0, 0, 0, 0],
                strokeWidth: 1,
            },
        ],
    };

    return (
        <SafeAreaView style={styles.container}>
            <Animated.ScrollView
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], {
                    listener: (event: NativeSyntheticEvent<NativeScrollEvent>) => {
                        const offsetY = event.nativeEvent.contentOffset.y;
                        if (offsetY > 50 && !showHeader) {
                            setShowHeader(true);
                        } else if (offsetY <= 50 && showHeader) {
                            setShowHeader(false);
                        }
                    },
                    useNativeDriver: false,
                })}
                scrollEventThrottle={16}
            >
                <View>
                    <View style={styles.header}>
                        <Animated.Text
                            style={[
                                styles.title,
                                {
                                    opacity: animatedTitleOpacity,
                                },
                            ]}
                        >
                            {' '}
                            {capitalizeFirstLetter(selectedDayFormatted(date))}{' '}
                        </Animated.Text>
                    </View>
                    <View>
                        <Text style={styles.startTimeRace}>
                            Commencé à {raceStartTimeFormatted(date)}
                        </Text>
                    </View>

                    <View>
                        <StatisticsElement />
                    </View>
                    <View>
                        {averageSpeedData.length > 0 ? (
                            <LineChartElement title="Vitesse (m/s)" data={lineAverageSpeedData} />
                        ) : (
                            <LineChartElement title="Vitesse (m/s)" data={lineChartErrorData} />
                        )}
                    </View>

                    <View>
                        {batteryActivityData.length > 0 ? (
                            <LineChartElement
                                title="Activité Batterie (mAm)"
                                data={lineBatteryActictyData}
                            />
                        ) : (
                            <LineChartElement title="Activité Batterie" data={lineChartErrorData} />
                        )}
                    </View>
                </View>
            </Animated.ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 16,
        marginRight: 16,
    },

    header: {
        marginTop: 32,
    },
    startTimeRace: {
        color: Color.greyText,
        marginTop: 8,
    },
    title: {
        color: Color.text,
        fontSize: 24,
        fontWeight: 'bold',
    },
});
