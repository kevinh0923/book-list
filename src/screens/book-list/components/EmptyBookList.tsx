import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Button } from '@components/common';

type EmptyBookListProps = {
  onCreate: () => void;
};

export const EmptyBookList: React.FC<EmptyBookListProps> = ({ onCreate }) => (
  <View style={styles.container}>
    <Text style={styles.text}>No Books</Text>
    <Button variant="primary" label="Create" onPress={onCreate} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 24,
  },
});

export default EmptyBookList;
