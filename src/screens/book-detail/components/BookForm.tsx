import React from 'react';
import { FormProvider, UseFormReturn } from 'react-hook-form';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { View } from 'react-native';

import { Button } from '@components/common';
import { RatingField, InputField } from '@components/form';
import type { UpdateBookForm } from '../book.utils';

type BookFormProps = {
  onSubmit: (data: UpdateBookForm) => void;
  form: UseFormReturn<
    {
      title: string;
      description: string;
      authors: string;
      publishedAt: string;
      rating: number;
    },
    any
  >;
};

export const BookForm: React.FC<BookFormProps> = ({ form, onSubmit }) => {
  return (
    <KeyboardAwareScrollView keyboardShouldPersistTaps="handled">
      <View>
        <FormProvider {...form}>
          <InputField label="Title" name="title" />
          <InputField label="Description" name="description" />
          <InputField label="Authors" name="authors" />
          <InputField label="Publish Date" name="publishedAt" />
          <RatingField />
        </FormProvider>

        <Button label="Update" onPress={form.handleSubmit(onSubmit)} />
      </View>
    </KeyboardAwareScrollView>
  );
};
