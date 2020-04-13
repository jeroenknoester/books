import { Book } from '../../models';

export interface BookState {
  items: Book[];
  loadSuccess: boolean;
  errorMessage: string;
}
