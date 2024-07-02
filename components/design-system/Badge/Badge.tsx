import { StyleSheet, Text, View } from 'react-native';

import Colors from '@/styles/constants/Colors';

interface BadgeProps {
    status: 'Connecté' | 'Déconnecté';
}

export default function Badge({ status }: BadgeProps) {
    return (
        <View
            style={[
                styles.container,
                {
                    backgroundColor:
                        status === 'Déconnecté' ? Colors.accentLightFade : Colors.greenLightFade,
                },
            ]}
        >
            <Text
                style={[
                    styles.text,
                    { color: status === 'Déconnecté' ? Colors.accent : Colors.green },
                ]}
            >
                {status}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        borderRadius: 100,
        gap: 10,
        justifyContent: 'center',
        paddingHorizontal: 21,
        paddingVertical: 6,
    },
    text: {
        fontSize: 16,
        lineHeight: 22,
    },
});
