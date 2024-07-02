import React, { useState } from 'react';

import { View, StyleSheet, LayoutChangeEvent, Text } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

import Color from '../../styles/constants/Colors';

interface ChartLineElementProps {
    // TODO : Add props here
    title: string;
}

export default function ChartLineElement({ title }: ChartLineElementProps) {
    const [parentWidth, setParentWidth] = useState(0);

    const onLayout = (event: LayoutChangeEvent) => {
        const { width } = event.nativeEvent.layout;
        setParentWidth(width);
    };
    const linedata = {
        labels: ['00:00', '05:00', '10:00', '15:00', '20:00', '25:00'],
        datasets: [
            {
                data: [20, 45, 28, 80, 99, 43],
                strokeWidth: 1, // optional
            },
        ],
    };

    return (
        <View style={styles.container} onLayout={onLayout}>
            <Text style={styles.title}>{title}</Text>
            {parentWidth > 0 && (
                <LineChart
                    data={linedata}
                    width={parentWidth} // from react-native
                    height={220}
                    yAxisLabel={''}
                    chartConfig={{
                        backgroundColor: Color.white,
                        backgroundGradientFrom: Color.white,
                        backgroundGradientTo: Color.white,
                        decimalPlaces: 2, // optional, defaults to 2dp
                        labelColor: () => Color.greyText,
                        fillShadowGradient: Color.primaryLight,

                        propsForBackgroundLines: {
                            strokeDasharray: '10',
                            stroke: Color.greyText,
                        },
                        color: () => Color.primary,
                        style: {
                            borderRadius: 16,
                        },
                    }}
                    bezier
                    style={{
                        marginVertical: 8,
                        borderRadius: 16,
                    }}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 16,
        marginRight: 16,
        marginTop: 32,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});
