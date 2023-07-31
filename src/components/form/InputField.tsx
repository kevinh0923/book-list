import React, { useMemo } from 'react';
import { View } from 'react-native';
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
  };

export const InputField: React.FC<InputFieldProps> = ({
  name,
  label,
  rules,
  defaultValue,
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
    <View>
      <TextInput
        label={label}
        onBlur={field.onBlur}
        onChangeText={field.onChange}
        value={field.value}
        {...inputProps}
      />
      {error ? <Error error={error} /> : null}
    </View>
  );
};

export default InputField;
