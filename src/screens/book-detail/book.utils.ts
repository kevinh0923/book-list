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

const title = z
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

const rating = z.number();

export const bookFormValues = z
  .object({
    title,
    description,
    authors,
    publishedAt,
    rating,
  })
  .refine(refineFormValues, refineMessage);

export type UpdateBookForm = z.infer<typeof bookFormValues>;
