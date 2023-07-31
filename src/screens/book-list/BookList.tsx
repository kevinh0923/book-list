import React, { useCallback } from 'react';
import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { useGetBooksQuery } from '@api/book';
import BookItem from '@components/BookItem';
import { Screen } from '@components/common';

import { EmptyBookList } from './components/EmptyBookList';
import type { RootStackParamList, Book } from '@types';

type BookListProps = NativeStackScreenProps<RootStackParamList, 'BookList'>;

export const BookListScreen: React.FC<BookListProps> = ({ navigation }) => {
  const { data: books, isLoading } = useGetBooksQuery();

  const handleSelectBook = useCallback(
    (bookId?: string) => () => {
      navigation.push('BookDetail', { id: bookId });
    },
    [navigation],
  );

  const renderBookItem = useCallback(
    ({ item }: { item: Book }) => {
      return <BookItem book={item} onSelect={handleSelectBook(item._id)} />;
    },
    [handleSelectBook],
  );

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
      <FlatList<Book>
        data={books}
        renderItem={renderBookItem}
        ListEmptyComponent={EmptyBookList}
        keyExtractor={item => item._id}
        contentContainerStyle={styles.listContainerStyle}
        ItemSeparatorComponent={() => <View style={styles.listItemSeparator} />}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    lineHeight: 38,
  },
  newBtnText: {
    color: '#002B56',
    textDecorationStyle: 'solid',
    textDecorationColor: '#002B56',
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
