export type Book = {
  _id: string;
  name: string;
  authors: string[];
  description: string;
  publishedAt: string;
  updatedAt: string;
  isFavourite: boolean;
  coverImageUrl: string;
  rate: number;
};

export type UpdateBookParams = Omit<Book, '_id'>;

export type GetBooksResponse = Book[];
