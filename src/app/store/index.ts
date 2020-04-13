import { ActionReducerMap, MetaReducer, createSelector } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { BookState, State } from './interfaces';
import { booksReducer } from './reducers';

export const reducers: ActionReducerMap<State> = {
  books: booksReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];

export * from './actions';
