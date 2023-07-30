import { apiGet, apiPost, apiPut, apiDelete } from './httpClient';
import type { Book, UpdateBookParams } from '../types/book';

const BOOK_API_URI = '/books';

export const getBooks = () => {
  return apiGet<Book[]>(BOOK_API_URI);
};

export const createBook = (payload: UpdateBookParams) => {};

export const updateBook = (payload: UpdateBookParams) => {};

export const deleteBook = (bookId: string) => {};

export default {
  getBooks,
  createBook,
  updateBook,
  deleteBook,
};
