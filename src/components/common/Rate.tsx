import React, { useState } from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { Star } from '@components/icons';
import { Size } from '@types';

type RateProps = {
  rate: number;
  size?: Size;
  editable?: boolean;
};

export const Rate: React.FC<RateProps> = ({
  rate: _rate,
  size = 'S',
  editable = false,
}) => {
  const [rate, setRate] = useState(_rate);

  return (
    <View style={styles.container}>
      {[1, 2, 3, 4, 5].map(val => (
        <Pressable
          key={val}
          onPress={editable ? () => setRate(val) : undefined}>
          <Star isFilled={val <= rate} size={size} />
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});
