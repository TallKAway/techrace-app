import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, SafeAreaView, Animated } from 'react-native';

import { useGetRaces } from '@/api/ressources/races/races';
import Badge from '@/components/design-system/Badge/Badge';
import LineChartElement from '@/components/design-system/LineChart/LineChartElement';
import StatisticsSummaryCard from '@/components/design-system/StatisticsSummaryCard/StatisticsSummaryCard';
import Colors from '@/styles/constants/Colors';

export default function StatisticsSummaryScreen() {
    const navigation = useNavigation();
    const [showHeader, setShowHeader] = useState(false);
    const scrollY = new Animated.Value(0);

    // Fetch data from the API, this is an example of how to use the useGetRaces hook
    const { data } = useGetRaces();
    console.log(data);

    // Récuperer les données depuis l'API, c'est un exemple de ce que peut renvoyer le hook useGetRaces. Remplacer lineData par les données récupérées dans data
    const linedata = {
        labels: ['00:00', '05:00', '10:00', '15:00', '20:00', '25:00'],
        datasets: [
            {
                data: [20, 45, 28, 80, 99, 43],
                strokeWidth: 1, // optional
            },
        ],
    };

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerShadowVisible: false,
            headerTitleStyle: {
                color: showHeader ? Colors.text : 'transparent',
                opacity: showHeader ? 0 : 1,
            },
            title: 'Statistiques',
        });
    }, [showHeader, navigation]);

    const animatedHeaderHeight = scrollY.interpolate({
        inputRange: [0, 50],
        outputRange: [50, 0],
        extrapolate: 'clamp',
    });

    const animatedHeaderOpacity = scrollY.interpolate({
        inputRange: [0, 50],
        outputRange: [1, 0],
        extrapolate: 'clamp',
    });

    const animatedTitleOpacity = scrollY.interpolate({
        inputRange: [0, 50],
        outputRange: [1, 0],
        extrapolate: 'clamp',
    });

    return (
        <SafeAreaView style={styles.container}>
            <Animated.ScrollView
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], {
                    listener: (event) => {
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
                    <Badge status="Connecté" />
                </View>
                <Animated.View
                    style={[
                        styles.animatedHeader,
                        {
                            height: animatedHeaderHeight,
                            opacity: animatedHeaderOpacity,
                        },
                    ]}
                >
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
                </Animated.View>
                <View>
                    <LineChartElement title="Vitesse Moyenne (m/s)" data={linedata} />
                </View>
                {/* TODO: map les infos selon la date quand on aura les données */}
                <View>
                    <Text style={styles.date}>Aujourd'hui</Text>
                    <StatisticsSummaryCard />
                    <StatisticsSummaryCard />
                    <StatisticsSummaryCard />
                    <StatisticsSummaryCard />
                </View>
            </Animated.ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    animatedHeader: {
        marginBottom: 16,
    },
    container: {
        flex: 1,
        marginHorizontal: 16,
        marginTop: 16,
    },
    date: {
        color: Colors.greyText,
        fontSize: 14,
        fontWeight: 'bold',
        paddingBottom: 8,
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
