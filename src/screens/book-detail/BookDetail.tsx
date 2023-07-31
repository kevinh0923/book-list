import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { useCreateBookMutation, useGetBookQuery } from '@api/book';
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

  const { mutate: createBook } = useCreateBookMutation();

  const setNavigationOptions = useCallback(() => {
    navigation.setOptions({
      headerTitle: `${bookId ? 'Edit' : 'Create'} Book`,
    });
  }, [navigation, bookId]);

  useEffect(() => {
    setNavigationOptions();
  }, [setNavigationOptions]);

  const handleSubmit = (data: UpdateBookForm) => {};

  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <Screen
      header={
        <>
          <Text style={styles.title}>Edit</Text>
          <FavoriteButton
            isFavorite={isFavorite}
            onPress={() => setIsFavorite(isFav => !isFav)}
          />
        </>
      }>
      {book || !bookId ? (
        <BookForm defaultValues={book} onSubmit={handleSubmit} />
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
