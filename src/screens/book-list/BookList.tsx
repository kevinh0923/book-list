import React, { useCallback, useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import moment from 'moment';

import { useGetBooksQuery, useUpdateBookMutation } from '@api/book';
import BookItem from '@components/BookItem';
import { Screen } from '@components/common';
import type { RootStackParamList, Book } from '@types';
import { COLORS } from '@theme/colors';

import { EmptyBookList } from './components/EmptyBookList';

type BookListProps = NativeStackScreenProps<RootStackParamList, 'BookList'>;

export const BookListScreen: React.FC<BookListProps> = ({ navigation }) => {
  const { data: books, isLoading } = useGetBooksQuery();
  const { mutate: updateBook } = useUpdateBookMutation();

  const handleSelectBook = useCallback(
    (bookId?: string) => () => {
      navigation.push('BookDetail', { id: bookId });
    },
    [navigation],
  );

  const updateBookFavorite = useCallback(
    (book: Book) => () => {
      const { _id, ...rest } = book;

      updateBook({
        bookId: _id,
        payload: {
          ...rest,
          isFavourite: !book.isFavourite,
        },
      });
    },
    [updateBook],
  );

  const renderBookItem = useCallback(
    ({ item }: { item: Book }) => {
      return (
        <BookItem
          book={item}
          onSelect={handleSelectBook(item._id)}
          onUpdateFavorite={updateBookFavorite(item)}
        />
      );
    },
    [handleSelectBook, updateBookFavorite],
  );

  // In production mode, there should be such functionalities;
  // - Filter by name, author, published date, etc
  // - Sort by published date, updated date, etc
  const sortedBooks = useMemo(() => {
    const result = [...(books ?? [])];
    return result.sort((a, b) =>
      moment(a.updatedAt).isBefore(moment(b.updatedAt)) ? 1 : -1,
    );
  }, [books]);

  return (
    <Screen
      header={
        <>
          <Text style={styles.title}>Books</Text>
          <Pressable onPress={handleSelectBook()}>
            <Text style={styles.newBtnText}>New</Text>
          </Pressable>
        </>
      }>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList<Book>
          data={sortedBooks}
          renderItem={renderBookItem}
          ListEmptyComponent={<EmptyBookList onCreate={handleSelectBook()} />}
          keyExtractor={item => item._id}
          contentContainerStyle={styles.listContainerStyle}
          ItemSeparatorComponent={() => (
            <View style={styles.listItemSeparator} />
          )}
        />
      )}
    </Screen>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    lineHeight: 38,
  },
  newBtnText: {
    color: COLORS.blue,
    textDecorationStyle: 'solid',
    textDecorationColor: COLORS.blue,
    textDecorationLine: 'underline',
  },
  listContainerStyle: {
    paddingVertical: 24,
    paddingHorizontal: 4,
  },
  listItemSeparator: {
    marginVertical: 8,
  },
});

export default BookListScreen;
