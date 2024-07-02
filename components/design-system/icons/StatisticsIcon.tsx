import React from 'react';
import Svg, { Rect, Path } from 'react-native-svg';

export const StatisticsIcon = () => {
    return (
        <Svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <Rect width="32" height="32" rx="6" fill="#FFEC80" />
            <Path
                d="M6.44094 7C6.19685 7 6 7.19739 6 7.43273V24.5749C6 24.8102 6.19685 25 6.44094 25H25.5591C25.8032 25 26 24.8102 26 24.5749C26 24.3319 25.8032 24.1421 25.5591 24.1421H6.88976V7.43273C6.88976 7.19739 6.69291 7 6.44094 7ZM17.1102 12.5723V22.0013H18.8898V12.5723H17.1102ZM13.1102 13.8553V22.0013H14.8898V13.8553H13.1102ZM9.11024 15.1459V22.0013H10.8898V15.1459H9.11024ZM21.1102 16.4289V22.0013H22.8898V16.4289H21.1102Z"
                fill="black"
            />
        </Svg>
    );
};
