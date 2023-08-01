import React, { useRef, useEffect } from 'react';
import { FormProvider } from 'react-hook-form';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { View, StyleSheet, Keyboard, TextInput } from 'react-native';
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
  isProceeding?: boolean;
};

export const BookForm: React.FC<BookFormProps> = ({
  defaultValues,
  isProceeding,
  onSubmit,
}) => {
  const nameRef = useRef<TextInput>(null);
  const descriptionRef = useRef<TextInput>(null);
  const authorsRef = useRef<TextInput>(null);
  const publishedAtRef = useRef<TextInput>(null);
  const coverImageUrlRef = useRef<TextInput>(null);

  useEffect(() => {
    if (!defaultValues) {
      nameRef?.current?.focus(); // Auto-focus name field if it's create form.
    }
  }, [defaultValues]);

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

  const handleSubmitEditing = (ref?: React.RefObject<TextInput>) => () => {
    if (ref) {
      ref.current?.focus();
    } else {
      // On the last element, just dismiss keyboard instead of submitting for selecting rate
      Keyboard.dismiss();
    }
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled">
      <FormProvider {...form}>
        <View style={styles.formContainer}>
          <InputField
            ref={nameRef}
            style={styles.formField}
            label="Title"
            name="name"
            onSubmitEditing={handleSubmitEditing(descriptionRef)}
            blurOnSubmit={false}
          />
          <InputField
            multiline
            ref={descriptionRef}
            style={styles.formField}
            label="Description"
            name="description"
            onSubmitEditing={handleSubmitEditing(authorsRef)}
            blurOnSubmit={false}
          />
          <InputField
            style={styles.formField}
            ref={authorsRef}
            label="Authors"
            name="authors"
            hint="Separate names by comma. e.g. John Doe, Kevin He"
            onSubmitEditing={handleSubmitEditing(publishedAtRef)}
          />
          <InputField
            ref={publishedAtRef}
            style={styles.formField}
            label="Publish Date"
            name="publishedAt"
            hint="YYYY-MM-DD"
            onSubmitEditing={handleSubmitEditing(coverImageUrlRef)}
          />
          <InputField
            ref={coverImageUrlRef}
            style={styles.formField}
            label="Cover Image URL"
            name="coverImageUrl"
            onSubmitEditing={handleSubmitEditing()}
          />
          <RatingField style={styles.formField} />
        </View>
      </FormProvider>

      <View style={styles.actions}>
        <Button
          busy={isProceeding}
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
