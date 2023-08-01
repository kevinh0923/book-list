import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import type { Size } from '@types';
import { COLORS } from '@theme/colors';

type HeartProps = {
  isFilled?: boolean;
  size?: Size;
};

export const Heart: React.FC<HeartProps> = ({ isFilled, size = 'S' }) => {
  const animRef = useRef(new Animated.Value(0));

  useEffect(() => {
    Animated.sequence([
      Animated.timing(animRef.current, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(animRef.current, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  }, [isFilled]);

  return (
    <Animated.View
      style={{
        transform: [
          {
            scale: animRef.current.interpolate({
              inputRange: [0, 1],
              outputRange: [1, 1.3],
            }),
          },
        ],
      }}>
      {size === 'S' ? (
        <Svg width="21" height="19" viewBox="0 0 21 19" fill="none">
          <Path
            d="M3.11086 10.7389L9.84002 17.3844C10.0952 17.6364 10.2228 17.7624 10.376 17.7896C10.4338 17.7998 10.493 17.7998 10.5509 17.7896C10.704 17.7624 10.8316 17.6364 11.0868 17.3844L17.816 10.7389C19.6016 8.97541 19.8208 6.16807 18.3306 4.14881L17.9094 3.57813C16.0643 1.07797 12.2113 1.48329 10.9268 4.31267C10.7461 4.7107 10.1807 4.7107 10 4.31267C8.71553 1.48329 4.86256 1.07797 3.0174 3.57813L2.59623 4.14881C1.10599 6.16807 1.32522 8.97541 3.11086 10.7389Z"
            stroke={isFilled ? COLORS.red : COLORS.gray50}
            fill={isFilled ? COLORS.red : 'none'}
            strokeWidth="2"
          />
        </Svg>
      ) : (
        <Svg width="36" height="35" viewBox="0 0 36 35" fill="none">
          <Path
            d="M7.23931 14.8806L17.2814 25.2574C17.6192 25.6065 17.7881 25.781 18 25.781C18.2119 25.781 18.3808 25.6065 18.7186 25.2574L28.7607 14.8806C31.22 12.3393 31.5247 8.40835 29.4864 5.51845L28.7213 4.43371C26.1138 0.736843 20.4655 1.3176 18.6648 5.46772C18.4125 6.04939 17.5875 6.04939 17.3352 5.46772C15.5345 1.3176 9.88624 0.736841 7.27873 4.43371L6.51364 5.51845C4.4753 8.40835 4.78 12.3393 7.23931 14.8806Z"
            stroke={isFilled ? COLORS.red : COLORS.gray50}
            fill={isFilled ? COLORS.red : 'none'}
            strokeWidth="2"
          />
        </Svg>
      )}
    </Animated.View>
  );
};
