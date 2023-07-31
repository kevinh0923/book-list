import { useQuery, useMutation } from '@tanstack/react-query';
import { apiGet, apiPost, apiPut, apiDelete } from './httpClient';
import type { Book, UpdateBookParams } from '../types/book';

const BOOK_API_URI = '/books';

export const getBooks = () => apiGet<Book[]>(BOOK_API_URI);

export const getBook = (bookId: string) =>
  apiGet<Book>(`${BOOK_API_URI}/${bookId}`);

export const createBook = (payload: UpdateBookParams) =>
  apiPost<UpdateBookParams, Book>(BOOK_API_URI, payload);

export const updateBook = ({
  bookId,
  payload,
}: {
  bookId: string;
  payload: UpdateBookParams;
}) => apiPut<UpdateBookParams, Book>(`${BOOK_API_URI}/${bookId}`, payload);

export const deleteBook = (bookId: string) =>
  apiDelete(`${BOOK_API_URI}/${bookId}`);

export const useGetBooksQuery = () =>
  useQuery<Book[]>(['books'], (): Promise<Book[]> => getBooks());

export const useGetBookQuery = (bookId: string) =>
  useQuery<Book>(
    ['book', { id: bookId }],
    (): Promise<Book> => getBook(bookId),
    {
      enabled: !!bookId,
    },
  );

export const useCreateBookMutation = () => useMutation(createBook);

export const useUpdateBookMutation = () =>
  useMutation(updateBook, {
    onMutate(data) {
      console.log('[data]', data);
    },
  });

export default {
  getBooks,
  createBook,
  updateBook,
  deleteBook,
  useGetBookQuery,
  useGetBooksQuery,
  useCreateBookMutation,
  useUpdateBookMutation,
};
