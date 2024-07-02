import { StyleSheet, View, StyleProp, ViewStyle } from 'react-native';

import Colors from '@/styles/constants/Colors';

type ControlButtonProps = {
    style?: StyleProp<ViewStyle> | null;
};

const ControlButton: React.FC<ControlButtonProps> = ({ style }) => {
    return (
        <View style={[styles.button, style]}>
            <View style={styles.triangle}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        borderColor: Colors.primary,
        borderRadius: 100,
        borderWidth: 6,
        height: 72,
        justifyContent: 'center',
        width: 72,
    },
    // eslint-disable-next-line react-native/no-color-literals
    triangle: {
        borderBottomColor: Colors.primary,
        borderBottomWidth: 30,
        borderLeftColor: 'transparent',
        borderLeftWidth: 17,
        borderRightColor: 'transparent',
        borderRightWidth: 17,
        marginBottom: 7,
        width: 30,
    },
});

export default ControlButton;
