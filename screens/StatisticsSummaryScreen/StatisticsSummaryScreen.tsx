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

import { useGetRaces } from '@/api/ressources/races/races';
import Badge from '@/components/design-system/Badge/Badge';
import LineChartElement from '@/components/design-system/LineChart/LineChartElement';
import StatisticsSummaryCard from '@/components/design-system/StatisticsSummaryCard/StatisticsSummaryCard';
import { useSocket } from '@/shared/providers/SocketContext';
import Colors from '@/styles/constants/Colors';

export default function StatisticsSummaryScreen() {
    const navigation = useNavigation();
    const { socket } = useSocket();
    const { data } = useGetRaces();
    console.log('data', data);

    const [showHeader, setShowHeader] = useState(false);

    const scrollY = new Animated.Value(0);

    const socketConnection = socket?.readyState === 1 ? 'Connecté' : 'Déconnecté';

    // Récuperer les données depuis l'API, c'est un exemple de ce que peut renvoyer le hook useGetRaces. Remplacer lineData par les données récupérées dans data
    const linedata = {
        labels: ['22/03', '23/03', '24/03', '25/03', '26/03', '27/03'],
        datasets: [
            {
                data: [2, 3, 0, 8, 9, 3],
                strokeWidth: 1,
            },
        ],
    };

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
                    <LineChartElement title="Nombre de courses effectuées" data={linedata} />
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
    container: {
        flex: 1,
        marginHorizontal: 16,
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
