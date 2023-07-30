import React, { useCallback, useEffect } from 'react';
import { View, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { InputField } from '../../components/common';
import type { RootStackParamList } from '../../types/navigation';

type BookDetailProps = NativeStackScreenProps<RootStackParamList, 'BookDetail'>;

export const BookDetailScreen: React.FC<BookDetailProps> = ({
  navigation,
  route,
}) => {
  const bookId = route.params?.id;
  const setNavigationOptions = useCallback(() => {
    navigation.setOptions({
      headerTitle: `${bookId ? 'Edit' : 'Create'} Book`,
    });
  }, [navigation, bookId]);

  useEffect(() => {
    setNavigationOptions();
  }, [setNavigationOptions]);
  return (
    <View>
      <Text>{bookId ? 'Edit Book' : 'Create Book'}</Text>
      <Text>Book Id: {bookId}</Text>
      <InputField value="" label="Title" onChange={() => {}} />
    </View>
  );
};

export default BookDetailScreen;
