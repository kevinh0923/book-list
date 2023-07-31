import { useCallback, useMemo } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import moment from 'moment';

import { useUpdateBookMutation, useGetBooksQuery } from '@api/book';
import type { Book, RootStackParamList } from '@types';

export const useBookList = (
  navigation: NativeStackNavigationProp<RootStackParamList, 'BookList'>,
) => {
  const { data: books, isLoading } = useGetBooksQuery();
  const { mutate: updateBook } = useUpdateBookMutation();

  const openBook = useCallback(
    (bookId?: string) => () => {
      navigation.push('BookDetail', { id: bookId });
    },
    [navigation],
  );

  const toggleFavorite = useCallback(
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

  // In production mode, there should be such functionalities;
  // - Filter by name, author, published date, etc
  // - Sort by published date, updated date, etc
  const sortedBooks = useMemo(() => {
    const result = [...(books ?? [])];
    return result.sort((a, b) =>
      moment(a.updatedAt).isBefore(moment(b.updatedAt)) ? 1 : -1,
    );
  }, [books]);

  return { toggleFavorite, openBook, books: sortedBooks, isLoading };
};

export default useBookList;
