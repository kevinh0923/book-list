import React, { useCallback, useEffect } from 'react';
import { View, Text, Pressable } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { useCreateBookMutation } from '@api/book';

import { InputField } from '../../components/common';
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

  const handleSubmit = () => {
    createBook({
      name: 'History of humankind',
      authors: ['Yuval Noah Harari'],
      description: 'Deeply insightful exploration of human history',
      publishedAt: '20-06-2011',
      updatedAt: '20-06-2023',
      isFavourite: true,
      coverImageUrl: 'https://gcdnb.pbrd.co/images/Rm0iWVYM9poc.jpg?o=1',
      rate: 3,
    });
  };

  return (
    <View>
      <Text>{bookId ? 'Edit Book' : 'Create Book'}</Text>
      <Text>Book Id: {bookId}</Text>
      <InputField value="" label="Title" onChange={() => {}} />
      <Pressable onPress={handleSubmit}>
        <Text>Create</Text>
      </Pressable>
    </View>
  );
};

export default BookDetailScreen;
