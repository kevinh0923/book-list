import React from 'react';
import { StyleSheet, Text } from 'react-native';

type ErrorProps = {
  error: string;
};

export const Error: React.FC<ErrorProps> = ({ error }) => (
  <Text style={styles.error}>{error}</Text>
);

const styles = StyleSheet.create({
  error: {},
});

export default Error;
