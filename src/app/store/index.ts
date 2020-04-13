import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { BookState, booksReducer } from './reducers';

export interface State {
  books: BookState;
}

export const reducers: ActionReducerMap<State> = {
  books: booksReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
