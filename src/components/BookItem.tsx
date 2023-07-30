import React, { memo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Image from 'react-native-fast-image';

import { Book } from '@types';

type BookItemProps = {
  book: Book;
};

const BookItem: React.FC<BookItemProps> = ({ book }) => {
  const { coverImageUrl, name, rate, isFavourite } = book;

  return (
    <View style={styles.container}>
      <Image source={{ uri: coverImageUrl }} style={styles.image} />
      <Text>{name}</Text>
    </View>
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
