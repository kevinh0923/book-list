import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

type ButtonProps = {
  label: JSX.Element | string;
  onPress: () => void;
};

export const Button: React.FC<ButtonProps> = ({ label, onPress }) => (
  <Pressable style={styles.boxShadow} onPress={onPress}>
    <Text>{label}</Text>
  </Pressable>
);

const styles = StyleSheet.create({
  boxShadow: {
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
  container: {},
});

export default Button;
