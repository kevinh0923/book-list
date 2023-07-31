import { z } from 'zod';
import moment from 'moment';

const refineFormValues = ({ publishedAt }: { publishedAt: string }) => {
  if (!publishedAt) {
    return false;
  }

  // @to-ask: Should publishedAt be past date?
  // moment(publishedAt) < moment()

  return moment(publishedAt).isValid();
};

const refineMessage = {
  path: ['publishedAt'],
  message: 'Invalid publish date',
};

const name = z
  .string({
    required_error: 'Title is required',
    invalid_type_error: 'Title must be a string',
  })
  .min(1, 'Title is required');

const description = z
  .string({
    required_error: 'Title is required',
    invalid_type_error: 'Title must be a string',
  })
  .min(1, 'Title is required');

const authors = z
  .string({
    required_error: 'Title is required',
    invalid_type_error: 'Title must be a string',
  })
  .min(1, 'Title is required');

const publishedAt = z
  .string({
    required_error: 'Publish date is required',
    invalid_type_error: 'Publish date must be a string',
  })
  .min(1, 'Title is required');

const coverImageUrl = z
  .string({
    required_error: 'Cover image URL is required',
    invalid_type_error: 'Cover image URL must be a string',
  })
  .min(1, 'Title is required');

const rate = z.number();

export const bookFormValues = z
  .object({
    name,
    description,
    authors,
    publishedAt,
    coverImageUrl,
    rate,
  })
  .refine(refineFormValues, refineMessage);

export type UpdateBookForm = z.infer<typeof bookFormValues>;
