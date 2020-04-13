import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BookState, State } from '../interfaces';

export const selectBooksState = (state: State) => state.books;

export const selectBooks = createSelector(
  selectBooksState,
  (books: BookState) => books.items
);
