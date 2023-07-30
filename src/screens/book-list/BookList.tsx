import React, { useCallback } from 'react';
import { View, Text, Pressable, FlatList } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { useGetBooksQuery } from '@api/book';
import BookItem from '@components/BookItem';

import { EmptyBookList } from './components/EmptyBookList';
import type { RootStackParamList, Book } from '@types';

type BookListProps = NativeStackScreenProps<RootStackParamList, 'BookList'>;

export const BookListScreen: React.FC<BookListProps> = ({ navigation }) => {
  const { data: books, isLoading } = useGetBooksQuery();

  const handleSelectBook = useCallback(
    (bookId: string) => () => {
      navigation.push('BookDetail', { id: bookId });
    },
    [navigation],
  );

  const renderBookItem = ({ item }: { item: Book }) => {
    return <BookItem book={item} onSelect={handleSelectBook(item._id)} />;
  };

  return (
    <View>
      <Text>Books</Text>
      <FlatList<Book>
        data={books}
        renderItem={renderBookItem}
        ListEmptyComponent={EmptyBookList}
      />
    </View>
  );
};

export default BookListScreen;
