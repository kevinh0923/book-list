import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import BookItem from '@components/BookItem';
import { Screen } from '@components/common';
import type { RootStackParamList, Book } from '@types';
import { COLORS } from '@theme/colors';

import { useBookList } from './useBookList';
import { EmptyBookList } from './components/EmptyBookList';

type BookListProps = NativeStackScreenProps<RootStackParamList, 'BookList'>;

export const BookListScreen: React.FC<BookListProps> = ({ navigation }) => {
  const { books, isLoading, openBook, toggleFavorite } =
    useBookList(navigation);

  const renderBookItem = ({ item }: { item: Book }) => {
    return (
      <BookItem
        book={item}
        onSelect={openBook(item._id)}
        onUpdateFavorite={toggleFavorite(item)}
      />
    );
  };

  return (
    <Screen
      header={
        <>
          <Text style={styles.title}>Books</Text>
          <Pressable onPress={openBook()}>
            <Text style={styles.newBtnText}>New</Text>
          </Pressable>
        </>
      }>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList<Book>
          data={books}
          renderItem={renderBookItem}
          ListEmptyComponent={<EmptyBookList onCreate={openBook()} />}
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
