import React from 'react';
import { StyleSheet } from 'react-native';

import { Button } from './common';
import { Heart } from './icons';

type FavoriteButtonProps = {
  isFavorite: boolean;
  onPress: () => void;
};

export const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  isFavorite,
  onPress,
}) => (
  <Button
    style={styles.button}
    label={<Heart isFilled={isFavorite} size="L" />}
    onPress={onPress}
  />
);

const styles = StyleSheet.create({
  button: {
    padding: 0,
  },
});

export default FavoriteButton;
