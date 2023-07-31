import { useEffect, useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import {
  useCreateBookMutation,
  useUpdateBookMutation,
  useGetBookQuery,
} from '@api/book';

import { UpdateBookForm } from './book.utils';
import type { RootStackParamList } from '../../types/navigation';

export const useBookDetail = ({
  navigation,
  bookId,
}: {
  navigation: NativeStackNavigationProp<RootStackParamList, 'BookDetail'>;
  bookId?: string;
}) => {
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

  useEffect(() => {
    navigation.setOptions({
      headerTitle: `${bookId ? 'Edit' : 'Create'} Book`,
    });
  }, [navigation, bookId]);

  const submitBook = (data: UpdateBookForm) => {
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

  return { submitBook, book, isProceeding, isLoading };
};

export default useBookDetail;
