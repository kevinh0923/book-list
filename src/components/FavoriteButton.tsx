import React from 'react';

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
  <Button label={<Heart isFilled={isFavorite} size="L" />} onPress={onPress} />
);
