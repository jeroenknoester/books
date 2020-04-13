import { Component, OnInit } from '@angular/core';
import { Book } from './models';
import { BookService } from './services/book.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  books$: Observable<Book[]>;
  title = 'Books';

  constructor(private readonly bookService: BookService) {}
  /** Initialization lifecycle hook */
  public ngOnInit(): void {
    this.books$ = this.bookService.getBooks();
  }
}
