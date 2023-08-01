import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import type { Size } from '@types';
import { COLORS } from '@theme/colors';

type StarProps = {
  size?: Size;
  isFilled?: boolean;
  index?: number;
};

export const Star: React.FC<StarProps> = ({
  size = 'S',
  isFilled = false,
  index = 1,
}) => {
  const animRef = useRef(new Animated.Value(0));

  useEffect(() => {
    if (!isFilled) {
      return;
    }
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
  }, [isFilled, index]);

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
        <Svg width="19" height="19" viewBox="0 0 19 19" fill="none">
          <Path
            d="M9.5122 0L11.6478 6.90983H18.5588L12.9677 11.1803L15.1033 18.0902L9.5122 13.8197L3.92107 18.0902L6.05669 11.1803L0.46556 6.90983H7.37657L9.5122 0Z"
            fill={isFilled ? COLORS.blue : COLORS.gray200}
          />
        </Svg>
      ) : (
        <Svg width="30" height="28" viewBox="0 0 30 28" fill="none">
          <Path
            d="M15 0L18.3677 10.3647H29.2658L20.4491 16.7705L23.8168 27.1353L15 20.7295L6.18322 27.1353L9.55093 16.7705L0.734152 10.3647H11.6323L15 0Z"
            fill={isFilled ? COLORS.blue : COLORS.gray200}
          />
        </Svg>
      )}
    </Animated.View>
  );
};
