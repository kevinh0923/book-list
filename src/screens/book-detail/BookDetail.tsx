import React from 'react';
import { View, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import type { RootStackParamList } from '../../types/navigation';

type BookDetailProps = NativeStackScreenProps<RootStackParamList, 'BookDetail'>;

export const BookDetailScreen: React.FC<BookDetailProps> = ({ route }) => {
  const bookId = route.params?.id;

  return (
    <View>
      <Text>Book Detail</Text>
      <Text>Book Id: {bookId}</Text>
    </View>
  );
};

export default BookDetailScreen;
