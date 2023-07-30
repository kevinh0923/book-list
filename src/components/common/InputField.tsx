import React from 'react';
import { View, Text, TextInput } from 'react-native';

type InputFieldProps = {
  value: string;
  label: string;
  onChange: (value: string) => void;
};

export const InputField: React.FC<InputFieldProps> = ({
  value,
  label,
  onChange,
}) => {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput value={value} onChangeText={onChange} />
    </View>
  );
};

export default InputField;
