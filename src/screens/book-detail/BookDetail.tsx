import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import {
  useCreateBookMutation,
  useUpdateBookMutation,
  useGetBookQuery,
} from '@api/book';
import { FavoriteButton } from '@components/FavoriteButton';
import { Screen } from '@components/common';

import { BookForm } from './components/BookForm';
import { UpdateBookForm } from './book.utils';
import type { RootStackParamList } from '../../types/navigation';

type BookDetailProps = NativeStackScreenProps<RootStackParamList, 'BookDetail'>;

export const BookDetailScreen: React.FC<BookDetailProps> = ({
  navigation,
  route,
}) => {
  const bookId = route.params?.id;

  const { data: book, isLoading } = useGetBookQuery(bookId ?? '');

  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (book) {
      setIsFavorite(book.isFavourite);
    }
  }, [book]);

  const { mutate: createBook, isLoading: isCreating } = useCreateBookMutation();
  const { mutate: updateBook, isLoading: isUpdating } = useUpdateBookMutation();
  const isProceeding = isCreating || isUpdating;

  const setNavigationOptions = useCallback(() => {
    navigation.setOptions({
      headerTitle: `${bookId ? 'Edit' : 'Create'} Book`,
    });
  }, [navigation, bookId]);

  useEffect(() => {
    setNavigationOptions();
  }, [setNavigationOptions]);

  const handleSubmit = (data: UpdateBookForm) => {
    if (!bookId) {
      createBook(
        {
          ...data,
          authors: data.authors.replaceAll(', ', ',').split(','),
          isFavourite: isFavorite,
          updatedAt: new Date().toLocaleString(),
        },
        {
          onSuccess: () => {
            navigation.push('BookList');
          },
        },
      );
    } else {
      updateBook(
        {
          bookId,
          payload: {
            ...data,
            authors: data.authors.replaceAll(', ', ',').split(','),
            isFavourite: isFavorite,
            updatedAt: new Date().toLocaleString(),
          },
        },
        {
          onSuccess: () => {
            navigation.push('BookList');
          },
        },
      );
    }
  };

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
          onSubmit={handleSubmit}
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
