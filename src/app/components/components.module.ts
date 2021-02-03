import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material-module/material.module';
import { BodyComponent } from './body/body.component';
import { FormsModule } from '@angular/forms';
import { GetBooksDataService } from './services/get-books-data.service';
import { BooksListComponent } from './books-list/books-list.component';



@NgModule({
  declarations: [
    BodyComponent,
    BooksListComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  exports: [
    BodyComponent
  ],
  providers: [
    GetBooksDataService
  ]
})
export class ComponentsModule { }
