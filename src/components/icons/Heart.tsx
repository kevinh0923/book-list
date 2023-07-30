import React from 'react';
import Svg, { Path } from 'react-native-svg';

type HeartProps = {
  isFilled?: boolean;
};

export const Heart: React.FC<HeartProps> = ({ isFilled }) => (
  <Svg width="21" height="19" viewBox="0 0 21 19" fill="none">
    <Path
      d="M3.11086 10.7389L9.84002 17.3844C10.0952 17.6364 10.2228 17.7624 10.376 17.7896C10.4338 17.7998 10.493 17.7998 10.5509 17.7896C10.704 17.7624 10.8316 17.6364 11.0868 17.3844L17.816 10.7389C19.6016 8.97541 19.8208 6.16807 18.3306 4.14881L17.9094 3.57813C16.0643 1.07797 12.2113 1.48329 10.9268 4.31267C10.7461 4.7107 10.1807 4.7107 10 4.31267C8.71553 1.48329 4.86256 1.07797 3.0174 3.57813L2.59623 4.14881C1.10599 6.16807 1.32522 8.97541 3.11086 10.7389Z"
      stroke={isFilled ? '#C62828' : '#33363F'}
      fill={isFilled ? '#C62828' : 'none'}
      strokeWidth="2"
    />
  </Svg>
);
