import React, { useState } from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { Star } from '@components/icons';

type RateProps = {
  rate: number;
};

export const Rate: React.FC<RateProps> = ({ rate: _rate }) => {
  const [rate, setRate] = useState(_rate);

  return (
    <View style={styles.container}>
      {[1, 2, 3, 4, 5].map(val => (
        <Pressable key={val} onPress={() => setRate(val)}>
          <Star isFilled={val <= rate} />
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
