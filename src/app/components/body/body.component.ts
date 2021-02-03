import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GetBooksDataService, IBooks } from '../services/get-books-data.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.less']
})
export class BodyComponent implements OnInit, OnDestroy {

  public screenHeight: number;
  public screenWidth: number;

  public book: IBooks;

  private choosenBookSubscription: Subscription;

  @HostListener('window:resize', ['$event'])
    onResize(event?) {
       this.screenHeight = window.innerHeight - 18;
       this.screenWidth = window.innerWidth  - 15;
    }

  constructor(private getBooksDataService: GetBooksDataService) {
    this.onResize();
  }

  ngOnInit() {
    this.choosenBookSubscription = this.getBooksDataService.booksList$
      .subscribe(data => this.book = data[0]);
  }

  ngOnDestroy() {
    this.choosenBookSubscription.unsubscribe();
  }

}
