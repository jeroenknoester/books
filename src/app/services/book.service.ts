import { Injectable } from '@angular/core';
import { Book, Author } from '../models';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor() {}

  getBooks(): Observable<Book[]> {
    const author = { firstname: 'Jeroen', lastname: 'Knoester' } as Author;
    const books = [
      { author, title: 'mijn boek' } as Book,
      { author, title: 'mijn boekje 2' } as Book,
    ];

    return of(books);
  }
}
