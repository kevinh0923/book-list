import React, { useMemo } from 'react';
import { View, StyleProp, ViewStyle, Text, StyleSheet } from 'react-native';
import {
  useController,
  UseControllerProps,
  useFormContext,
} from 'react-hook-form';

import { TextInput, TextInputProps } from '../common';
import { Error } from './Error';

type InputFieldProps = TextInputProps &
  UseControllerProps & {
    defaultValue?: string;
    hint?: string;
    style?: StyleProp<ViewStyle>;
  };

export const InputField: React.FC<InputFieldProps> = ({
  name,
  label,
  rules,
  defaultValue,
  style,
  hint,
  ...inputProps
}) => {
  const cxt = useFormContext();
  const { field } = useController({ name, rules, defaultValue });

  const error = useMemo(
    () =>
      cxt.formState.errors[name]
        ? (cxt.formState.errors[name]?.message as string)
        : null,
    [cxt.formState, name],
  );

  if (!cxt) {
    throw new Error('InputField mustbe wrapped with a FormProvider');
  }

  return (
    <View style={style}>
      <TextInput
        label={label}
        onBlur={field.onBlur}
        onChangeText={field.onChange}
        value={field.value}
        {...inputProps}
      />
      {error ? (
        <Error error={error} />
      ) : hint ? (
        <Text style={styles.hint}>{hint}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  hint: {
    fontSize: 10,
    padding: 4,
  },
});

export default InputField;
