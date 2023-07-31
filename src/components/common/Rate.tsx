import React, { useState, useCallback } from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { Star } from '@components/icons';
import { Size } from '@types';

export type RateProps = {
  rate: number;
  size?: Size;
  editable?: boolean;
  onChange?: (val: number) => void;
};

export const Rate: React.FC<RateProps> = ({
  rate: _rate,
  size = 'S',
  editable = false,
  onChange,
}) => {
  const [rate, setRate] = useState(_rate);

  const handleSelectRate = useCallback(
    (val: number) => () => {
      setRate(val);
      onChange?.(val);
    },
    [onChange],
  );

  return (
    <View style={styles.container}>
      {[1, 2, 3, 4, 5].map(val => (
        <Pressable
          key={val}
          onPress={editable ? handleSelectRate(val) : undefined}>
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
