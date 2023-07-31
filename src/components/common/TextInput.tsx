import React from 'react';
import {
  View,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
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
      <RNTextInput {...inputProps} />
    </View>
  );
};

export default TextInput;
