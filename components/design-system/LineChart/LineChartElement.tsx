import React, { useState } from 'react';

import { View, StyleSheet, LayoutChangeEvent, Text } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

import Color from '../../../styles/constants/Colors';

interface LineChartElementProps {
    // TODO : Add props here
    title: string;
    data: {
        labels: string[];
        datasets: {
            data: number[];
            strokeWidth: number;
        }[];
    };
}

export default function LineChartElement({ title, data }: LineChartElementProps) {
    const [parentWidth, setParentWidth] = useState(0);

    const onLayout = (event: LayoutChangeEvent) => {
        const { width } = event.nativeEvent.layout;
        setParentWidth(width);
    };

    return (
        <View style={styles.container} onLayout={onLayout}>
            <Text style={styles.title}>{title}</Text>
            {parentWidth > 0 && (
                <View>
                    <LineChart
                        data={data}
                        width={parentWidth}
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
                            marginVertical: 20,
                            borderRadius: 16,
                        }}
                    />
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 32,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});
