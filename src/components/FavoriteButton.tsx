import React from 'react';
import { StyleSheet } from 'react-native';

import type { Size } from '@types';

import { Button } from './common';
import { Heart } from './icons';

type FavoriteButtonProps = {
  isFavorite: boolean;
  size?: Size;
  onPress?: () => void;
};

export const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  isFavorite,
  size = 'L',
  onPress,
}) => (
  <Button
    style={styles.button}
    label={<Heart isFilled={isFavorite} size={size} />}
    onPress={onPress}
  />
);

const styles = StyleSheet.create({
  button: {
    padding: 0,
  },
});

export default FavoriteButton;
