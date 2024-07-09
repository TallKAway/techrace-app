import { StyleSheet, View, StyleProp, ViewStyle, Pressable } from 'react-native';

// import { useSocket } from '@/shared/providers/SocketContext';

import Colors from '@/styles/constants/Colors';

type ControlButtonProps = {
    style: StyleProp<ViewStyle>;
    direction: string;
    setLeftRightDir: (direction: string) => void;
    setFowardBackwardDir: (direction: string) => void;
};

const ControlButton = ({
    style,
    direction,
    setLeftRightDir,
    setFowardBackwardDir,
}: ControlButtonProps) => {
    // const { socket } = useSocket();

    // const [isMoving, setIsMoving] = useState(false);
    // const [carDirection, setCarDirection] = useState('stop');

    // useEffect(() => {
    //     moveControl(isMoving, carDirection);
    // }, [isMoving]);

    const buttonDirectionPressed = () => {
        if (direction == 'forward' || direction == 'backward') setFowardBackwardDir(direction);

        if (direction == 'left' || direction == 'right') setLeftRightDir(direction);

        // setCarDirection(direction);
        // setIsMoving(true);
    };

    const buttonDirectionRelease = () => {
        if (direction == 'forward' || direction == 'backward')
            setFowardBackwardDir('not going forward or backward');

        if (direction == 'left' || direction == 'right') setLeftRightDir('not going left or right');
        // setLeftRightDir('stop');
        // setCarDirection('stop');
        // setIsMoving(false);
    };

    // const goForward = function () {
    //     const speedData = {
    //         cmd: '1',
    //         data: [4069, 4069, 4069, 4069],
    //     };
    //     socket?.send(JSON.stringify(speedData));
    //     console.log('goForward');
    // };
    // const goBack = function () {
    //     console.log('goBack');
    //     const speedData = {
    //         cmd: '1',
    //         data: [-4069, -4069, -4069, -4069],
    //     };
    //     socket?.send(JSON.stringify(speedData));
    // };
    // const goLeft = function () {
    //     console.log('goLeft');
    //     const speedData = {
    //         cmd: '1',
    //         data: [0, 0, 2034, 2034],
    //     };
    //     socket?.send(JSON.stringify(speedData));
    // };
    // const goRight = function () {
    //     console.log('goRight');
    //     const speedData = {
    //         cmd: '1',
    //         data: [2034, 2034, 0, 0],
    //     };
    //     socket?.send(JSON.stringify(speedData));
    // };

    // const stopCar = function () {
    //     console.log('Car stop');
    //     const speedData = {
    //         cmd: '1',
    //         data: [0, 0, 0, 0],
    //     };
    //     socket?.send(JSON.stringify(speedData));
    // };

    // const moveControl = function (isMoving: boolean, direction: string) {
    //     if (isMoving) {
    //         switch (direction) {
    //             case 'up':
    //                 goForward();
    //                 break;

    //             case 'down':
    //                 goBack();
    //                 break;

    //             case 'left':
    //                 goLeft();
    //                 break;

    //             case 'right':
    //                 goRight();
    //                 break;
    //         }
    //     } else {
    //         stopCar();
    //     }
    // };

    return (
        <Pressable
            onLongPress={() => buttonDirectionPressed()}
            delayLongPress={50}
            onPressOut={() => buttonDirectionRelease()}
            style={[styles.button, style]}
        >
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
