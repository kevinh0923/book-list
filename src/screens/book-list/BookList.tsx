import React, { useCallback } from 'react';
import { View, Text, Pressable } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../../types/navigation';

type BookListProps = NativeStackScreenProps<RootStackParamList, 'BookList'>;

export const BookListScreen: React.FC<BookListProps> = ({ navigation }) => {
  const handleSelectBook = useCallback(
    (bookId: string) => () => {
      navigation.push('BookDetail', { id: bookId });
    },
    [navigation],
  );

  return (
    <View>
      <Text>Books</Text>
      <Pressable onPress={handleSelectBook('testId')}>
        <Text>Test Book</Text>
      </Pressable>
    </View>
  );
};

export default BookListScreen;
