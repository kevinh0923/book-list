import React from 'react';
import { FormProvider } from 'react-hook-form';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { View, StyleSheet } from 'react-native';
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
      name: defaultValues?.name ?? '',
      description: defaultValues?.description ?? '',
      authors: (defaultValues?.authors ?? []).join(','),
      publishedAt: defaultValues?.publishedAt ?? '',
      coverImageUrl: defaultValues?.coverImageUrl ?? '',
      rate: defaultValues?.rate ?? 1,
    },
  });

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled">
      <FormProvider {...form}>
        <View style={styles.formContainer}>
          <InputField style={styles.formField} label="Title" name="name" />
          <InputField
            style={styles.formField}
            label="Description"
            name="description"
          />
          <InputField style={styles.formField} label="Authors" name="authors" />
          <InputField
            style={styles.formField}
            label="Publish Date"
            name="publishedAt"
          />
          <InputField
            style={styles.formField}
            label="Cover Image URL"
            name="coverImageUrl"
          />
          <RatingField style={styles.formField} />
        </View>
      </FormProvider>

      <View style={styles.actions}>
        <Button
          variant="primary"
          label={defaultValues ? 'Update' : 'Create'}
          onPress={form.handleSubmit(onSubmit)}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

const gap = 16;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  formContainer: {
    paddingVertical: gap / -2,
  },
  formField: {
    marginVertical: gap / 2,
  },
  actions: {
    paddingHorizontal: 4,
    paddingVertical: 8,
  },
});

export default BookForm;
