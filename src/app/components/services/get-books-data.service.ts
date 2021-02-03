import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Observable, Observer } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetBooksDataService {

  public booksList$ = new BehaviorSubject(Array<IBooks>());


  constructor(private http: HttpClient) {
    this.getBooksData$('assets/data/bookList.json')
      .subscribe((data: Array<IBooks>) => {
        this.booksList$.next(data);
      });
  }

  public deleteBook(index: number): void {
    let bookListUpdated: Array<IBooks>;
    this.booksList$.subscribe(
      (books: Array<IBooks>) => {
        bookListUpdated = books;
      }
    );
    bookListUpdated.splice(index, 1);
    this.booksList$.next(bookListUpdated);
  }

  private getBooksData$(jsonUrl: string): Observable<Array<IBooks>> {
    return this.http.get(jsonUrl)
      .pipe(
        map((data: Array<IBooks>) => {
          console.log(data);
          return data;
        })
      );
  }
}

export interface IBooks {
  Id: number;
  AutherName: string;
  BookName: string;
  PublicationDate: string;
  CoverPhoto: string;
  CatalogNumber: number;
}
