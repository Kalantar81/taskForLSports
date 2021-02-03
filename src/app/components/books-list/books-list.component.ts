import { Component, OnDestroy, OnInit } from '@angular/core';

import { GetBooksDataService, IBooks } from '../services/get-books-data.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.less']
})
export class BooksListComponent implements OnInit {


  constructor(private getBooksDataService: GetBooksDataService) {}

  ngOnInit() {}

  public deleteBook(index: number): void {
    this.getBooksDataService.deleteBook(index);
  }

}



