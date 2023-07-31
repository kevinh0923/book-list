import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { FavoriteButton } from '@components/FavoriteButton';
import { Screen } from '@components/common';

import type { RootStackParamList } from '../../types/navigation';
import { BookForm } from './components/BookForm';
import { useBookDetail } from './useBookDetail';

type BookDetailProps = NativeStackScreenProps<RootStackParamList, 'BookDetail'>;

export const BookDetailScreen: React.FC<BookDetailProps> = ({
  navigation,
  route,
}) => {
  const bookId = route.params?.id;
  const { isLoading, submitBook, book, isProceeding } = useBookDetail({
    navigation,
    bookId,
  });

  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (book) {
      setIsFavorite(book.isFavourite);
    }
  }, [book]);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: `${bookId ? 'Edit' : 'Create'} Book`,
    });
  }, [navigation, bookId]);

  return (
    <Screen
      header={
        <>
          <Text style={styles.title}>{bookId ? 'Edit ' : 'Create '}Book</Text>
          <FavoriteButton
            isFavorite={isFavorite}
            onPress={() => setIsFavorite(isFav => !isFav)}
          />
        </>
      }>
      {book || !bookId ? (
        <BookForm
          defaultValues={book}
          isProceeding={isProceeding}
          onSubmit={submitBook}
        />
      ) : isLoading ? (
        <ActivityIndicator />
      ) : null}
    </Screen>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    lineHeight: 38,
  },
});

export default BookDetailScreen;
