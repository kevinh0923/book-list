import React from 'react';
import { FormProvider } from 'react-hook-form';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { View } from 'react-native';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '@components/common';
import { RatingField, InputField } from '@components/form';
import type { Book } from '@types';
import type { UpdateBookForm } from '../book.utils';
import { bookFormValues } from '../book.utils';

type BookFormProps = {
  onSubmit: (data: UpdateBookForm) => void;
  defaultValues: Book | undefined;
};

export const BookForm: React.FC<BookFormProps> = ({
  defaultValues,
  onSubmit,
}) => {
  const form = useForm({
    mode: 'onChange',
    resolver: zodResolver(bookFormValues),
    defaultValues: {
      title: defaultValues?.name ?? '',
      description: defaultValues?.description ?? '',
      authors: (defaultValues?.authors ?? []).join(','),
      publishedAt: defaultValues?.publishedAt ?? '',
      rating: defaultValues?.rate ?? 1,
    },
  });

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

        <Button
          variant="primary"
          label={defaultValues ? 'Update' : 'Create'}
          onPress={form.handleSubmit(onSubmit)}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};
