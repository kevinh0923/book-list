import React from 'react';
import {
  View,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  StyleSheet,
} from 'react-native';

import { InputLabel } from './InputLabel';

export type TextInputProps = RNTextInputProps & {
  label: string;
};

export const TextInput: React.FC<TextInputProps> = ({
  label,
  ...inputProps
}) => {
  return (
    <View>
      <InputLabel label={label} />
      <RNTextInput {...inputProps} style={styles.input} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderStyle: 'solid',
    borderColor: '#D0D4D9',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 4,
    paddingVertical: 8,
  },
});

export default TextInput;
