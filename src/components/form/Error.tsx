import React from 'react';
import { StyleSheet, Text } from 'react-native';

type ErrorProps = {
  error: string;
};

export const Error: React.FC<ErrorProps> = ({ error }) => (
  <Text style={styles.error}>{error}</Text>
);

const styles = StyleSheet.create({
  error: {
    color: 'red',
    fontSize: 10,
    padding: 4,
  },
});

export default Error;
