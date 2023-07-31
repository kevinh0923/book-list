import React, { useCallback, useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { useCreateBookMutation } from '@api/book';

import { BookForm } from './components/BookForm';
import { bookFormValues, UpdateBookForm } from './book.utils';
import type { RootStackParamList } from '../../types/navigation';

type BookDetailProps = NativeStackScreenProps<RootStackParamList, 'BookDetail'>;

export const BookDetailScreen: React.FC<BookDetailProps> = ({
  navigation,
  route,
}) => {
  const bookId = route.params?.id;

  const { mutate: createBook } = useCreateBookMutation();

  const setNavigationOptions = useCallback(() => {
    navigation.setOptions({
      headerTitle: `${bookId ? 'Edit' : 'Create'} Book`,
    });
  }, [navigation, bookId]);

  useEffect(() => {
    setNavigationOptions();
  }, [setNavigationOptions]);

  const bookForm = useForm({
    mode: 'onChange',
    resolver: zodResolver(bookFormValues),
    defaultValues: {
      title: '',
      description: '',
      authors: '',
      publishedAt: '',
      rating: 1,
    },
  });

  const handleSubmit = (data: UpdateBookForm) => {
    console.log('[book data]', data);
  };

  return (
    <SafeAreaView>
      <BookForm form={bookForm} onSubmit={handleSubmit} />
    </SafeAreaView>
  );
};

export default BookDetailScreen;
