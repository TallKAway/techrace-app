import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    SafeAreaView,
    Animated,
    NativeSyntheticEvent,
    NativeScrollEvent,
} from 'react-native';

import { useGetRacesByDate } from '@/api/ressources/races/races';
import Badge from '@/components/design-system/Badge/Badge';
import LineChartElement from '@/components/design-system/LineChart/LineChartElement';
import StatisticsSummaryCard from '@/components/design-system/StatisticsSummaryCard/StatisticsSummaryCard';
import { useSocket } from '@/shared/providers/SocketContext';
import Colors from '@/styles/constants/Colors';

export default function StatisticsSummaryScreen() {
    const navigation = useNavigation();
    const { socket } = useSocket();
    const { data } = useGetRacesByDate();

    const [showHeader, setShowHeader] = useState(false);

    const scrollY = new Animated.Value(0);

    const socketConnection = socket?.readyState === 1 ? 'Connecté' : 'Déconnecté';

    const racesByDate = data?.data;
    console.log("🚀 ~ StatisticsSummaryScreen ~ racesByDate:", racesByDate)

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerShadowVisible: showHeader ? true : false,
            headerTitleStyle: {
                color: showHeader ? Colors.text : 'transparent',
            },
            title: 'Statistiques',
        });
    }, [showHeader, navigation]);

    if (!racesByDate) {
        return null;
    }

    const lineGrahData = {
        labels: racesByDate
            ?.map(({ date }) =>
                new Date(date).toLocaleDateString('fr-FR', {
                    day: 'numeric',
                    month: 'numeric',
                })
            )
            .slice(0, 7),
        datasets: [
            {
                data: racesByDate?.map(({ races }) => races.length).slice(0, 7),
                strokeWidth: 1,
            },
        ],
    };

    const animatedTitleOpacity = scrollY.interpolate({
        inputRange: [0, 50],
        outputRange: [1, 0],
        extrapolate: 'clamp',
    });

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
                <View style={styles.statusContainer}>
                    <Badge status={socketConnection} />
                </View>
                <View>
                    <Animated.Text
                        style={[
                            styles.graphTitle,
                            {
                                opacity: animatedTitleOpacity,
                            },
                        ]}
                    >
                        Statistiques
                    </Animated.Text>
                </View>
                <View>
                    <LineChartElement title="Nombre de courses effectuées" data={lineGrahData} />
                </View>

                {racesByDate.map(({ date, races }) => {
                    let formattedDate = new Date(date).toLocaleDateString('fr-FR', {
                        weekday: 'long',
                        day: 'numeric',
                        month: 'long',
                    });

                    const today = new Date().toLocaleDateString('fr-FR', {
                        weekday: 'long',
                        day: 'numeric',
                        month: 'long',
                    });

                    if (formattedDate === today) {
                        formattedDate = "Aujourd'hui";
                    }

                    return (
                        <View key={date}>
                            <Text style={styles.date}>{formattedDate}</Text>
                            {races.map((race) => (
                                <StatisticsSummaryCard key={race.id} race={race} />
                            ))}
                        </View>
                    );
                })}
            </Animated.ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 16,
    },
    date: {
        color: Colors.greyText,
        fontSize: 14,
        fontWeight: 'bold',
        paddingBottom: 8,
        textTransform: 'capitalize',
    },
    graphTitle: {
        color: Colors.text,
        fontSize: 34,
        fontWeight: 'bold',
    },
    statusContainer: {
        alignItems: 'flex-end',
        paddingBottom: 32,
    },
});
