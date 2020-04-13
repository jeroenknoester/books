import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { BookService } from 'src/app/services/book.service';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class BookEffects {
  loadBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Book] Load Books'),
      mergeMap(() =>
        this.bookService.getBooks().pipe(
          map((books) => ({ type: '[Book] Load Books Success', data: books })),
          catchError((errorMessage) =>
            of({ type: '[Book] Load Books Failure', error: errorMessage })
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private readonly bookService: BookService
  ) {}
}
