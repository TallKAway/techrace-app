import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, TouchableHighlight } from 'react-native';

import { ScreenStackBottomNavigatorProps } from '@/app/domains/navigation';
import Badge from '@/components/design-system/Badge/Badge';
import CheckeredFlagIcon from '@/components/design-system/icons/CheckeredFlagIcon';
import Colors from '@/styles/constants/Colors';

export default function EmptyStatisticsSummaryScreen() {
    const navigation = useNavigation<ScreenStackBottomNavigatorProps>();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.statusContainer}>
                <Badge status="Connecté" />
            </View>
            <View style={styles.raceContainer}>
                <CheckeredFlagIcon />
                <Text style={styles.title}>Aucune course</Text>
                <Text style={styles.description}>
                    Vous n’avez pas de statistiques à afficher car vous n’avez pas encore effectué
                    de course.
                </Text>
                <TouchableHighlight
                    style={styles.button}
                    onPress={
                        // TODO : Ajouter ici la navigation vers la page de Car Race
                        () => navigation.navigate('CarRace')
                    }
                    underlayColor={Colors.primaryLight}
                >
                    <Text style={styles.buttonText}>Commencer une course</Text>
                </TouchableHighlight>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.primary,
        borderRadius: 14,
        paddingHorizontal: 20,
        paddingVertical: 14,
    },
    buttonText: {
        color: Colors.white,
        fontSize: 16,
    },
    container: {
        flex: 1,
        marginHorizontal: 16,
        marginTop: 16,
    },

    description: {
        fontSize: 16,
    },
    raceContainer: {
        alignItems: 'center',
        display: 'flex',
        flex: 1,
        gap: 24,
        justifyContent: 'center',
    },
    statusContainer: {
        alignItems: 'flex-end',
        paddingBottom: 32,
    },
    title: {
        color: Colors.text,
        fontSize: 16,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
});
