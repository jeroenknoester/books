import { createReducer, on } from '@ngrx/store';
import {
  loadBooks,
  loadBooksFailure,
  loadBooksSuccess,
} from '../actions/book.actions';
import { Book } from './../../models';

export const bookFeatureKey = 'book';

export interface BookState {
  items: Book[];
  loadSuccess: boolean;
  errorMessage: string;
}

export const initialState: BookState = {
  items: [],
  loadSuccess: undefined,
  errorMessage: undefined,
};

export const booksReducer = createReducer(
  initialState,
  on(loadBooks, (state) => state),
  on(loadBooksSuccess, (state, action) => ({
    ...state,
    items: action.data,
    loadSuccess: true,
    errorMessage: undefined,
  })),
  on(loadBooksFailure, (state, error) => ({
    ...state,
    loadSuccess: false,
    errorMessage: 'An error occurred',
  }))
);
