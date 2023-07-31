import React from 'react';
import { Text, StyleSheet } from 'react-native';

type InputLabelProps = {
  label: string;
};

export const InputLabel: React.FC<InputLabelProps> = ({ label }) => (
  <Text style={styles.label}>{label}</Text>
);

const styles = StyleSheet.create({
  label: {
    fontWeight: '700',
    fontSize: 10,
    lineHeight: 12,
    padding: 4,
  },
});

export default InputLabel;
