import React from 'react';
import { View, Text, Pressable } from 'react-native';

type EmptyBookListProps = {
  onCreate: () => void;
};

export const EmptyBookList: React.FC<EmptyBookListProps> = ({ onCreate }) => (
  <View>
    <Text>No Books</Text>
    <Pressable onPress={onCreate}>
      <Text>Create</Text>
    </Pressable>
  </View>
);
