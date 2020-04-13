import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Book } from './models';
import { loadBooks } from './store/actions';
import { State } from './store/interfaces';
import { selectBooks } from './store/selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  books$: Observable<Book[]>;
  title = 'Books';

  constructor(private readonly store: Store<State>) {}
  /** Initialization lifecycle hook */
  ngOnInit(): void {
    this.store.dispatch(loadBooks());
    this.books$ = this.store.pipe(select(selectBooks));
  }
}
