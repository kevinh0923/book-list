import React, { memo } from 'react';
import { Pressable, View, Text, StyleSheet } from 'react-native';
import Image from 'react-native-fast-image';

import type { Book } from '@types';

import { Rate } from './common';
import { Heart } from './icons';

type BookItemProps = {
  book: Book;
  onSelect: () => void;
};

const BookItem: React.FC<BookItemProps> = ({ book, onSelect }) => {
  const { coverImageUrl, name, rate, isFavourite } = book;

  return (
    <Pressable style={styles.boxShadow} onPress={onSelect}>
      <View style={styles.container}>
        <Image source={{ uri: coverImageUrl }} style={styles.image} />
        <View style={styles.bookInfo}>
          <View>
            <Text style={styles.title} numberOfLines={1}>
              {name}
            </Text>
            <Rate rate={rate} />
          </View>
          <View style={styles.bookActions}>
            <Pressable onPress={onSelect}>
              <Text style={styles.editBtnText}>Edit</Text>
            </Pressable>
            <Heart isFilled={isFavourite} />
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 16,
    overflow: 'hidden',
  },
  image: {
    width: 80,
    height: 93,
  },
  bookInfo: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 10,
    justifyContent: 'space-between',
  },
  bookActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  editBtnText: {
    color: '#002B56',
    textDecorationStyle: 'solid',
    textDecorationColor: '#002B56',
    textDecorationLine: 'underline',
  },
  boxShadow: {
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
  title: {
    fontSize: 20,
    lineHeight: 24,
  },
});

export default memo(BookItem);
