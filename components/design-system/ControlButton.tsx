import { StyleSheet, View, StyleProp, ViewStyle, Pressable } from 'react-native';

import Colors from '@/styles/constants/Colors';

type ControlButtonProps = {
    style: StyleProp<ViewStyle>;
    direction: string;
};

const ControlButton = ({ style, direction }: ControlButtonProps) => {
    const goUp = function () {
        console.log('goUp');
    };
    const goDown = function () {
        console.log('goDown');
    };
    const goLeft = function () {
        console.log('goLeft');
    };
    const goRight = function () {
        console.log('goRight');
    };

    const moveControl = function (direction: string) {
        switch (direction) {
            case 'up':
                goUp();
                break;

            case 'down':
                goDown();
                break;

            case 'left':
                goLeft();
                break;

            case 'right':
                goRight();
                break;

            default:
                break;
        }
    };

    return (
        <Pressable onPress={() => moveControl(direction)} style={[styles.button, style]}>
            <View style={styles.triangle}></View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        borderColor: Colors.primary,
        borderRadius: 100,
        borderWidth: 4,
        height: 72,
        justifyContent: 'center',
        width: 72,
    },

    triangle: {
        borderBottomColor: Colors.primary,
        borderBottomWidth: 30,
        borderLeftColor: Colors.transparent,
        borderLeftWidth: 17,
        borderRightColor: Colors.transparent,
        borderRightWidth: 17,
        marginBottom: 7,
        width: 30,
    },
});

export default ControlButton;
