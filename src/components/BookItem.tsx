import React, { memo } from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import Image from 'react-native-fast-image';

import { Book } from '@types';

type BookItemProps = {
  book: Book;
  onSelect: () => void;
};

const BookItem: React.FC<BookItemProps> = ({ book, onSelect }) => {
  const { coverImageUrl, name, rate, isFavourite } = book;

  return (
    <Pressable style={styles.container} onPress={onSelect}>
      <Image source={{ uri: coverImageUrl }} style={styles.image} />
      <Text>{name}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  image: {
    width: 50,
    height: 50,
  },
});

export default memo(BookItem);
