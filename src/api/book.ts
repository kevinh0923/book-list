import { useQuery, useMutation } from '@tanstack/react-query';
import { apiGet, apiPost, apiPut, apiDelete } from './httpClient';
import type { Book, UpdateBookParams } from '../types/book';

const BOOK_API_URI = '/books';

export const getBooks = () => {
  return apiGet<Book[]>(BOOK_API_URI);
};

export const createBook = (payload: UpdateBookParams) => {
  return apiPost<UpdateBookParams, Book>(BOOK_API_URI, payload);
};

export const updateBook = (payload: UpdateBookParams) => {};

export const deleteBook = (bookId: string) => {};

export const useGetBooksQuery = () =>
  useQuery<Book[]>(['books'], (): Promise<Book[]> => getBooks());

export const useCreateBookMutation = () =>
  useMutation(createBook, {
    onMutate(data) {
      console.log('[create mutate data]', data);
    },
  });

export default {
  getBooks,
  createBook,
  updateBook,
  deleteBook,
};
