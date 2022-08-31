import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseRoutingModule } from './base-routing.module';
import { BaseComponent } from './base.component';
import { HomeComponent } from './home/home.component';
import { AuthorsComponent } from './authors/authors.component';
import { BooksComponent } from './books/books.component';
import { ViewBookComponent } from './view-book/view-book.component';
import { ViewAuthorComponent } from './view-author/view-author.component';

@NgModule({
  declarations: [
    BaseComponent,
    HomeComponent,
    AuthorsComponent,
    BooksComponent,
    ViewBookComponent,
    ViewAuthorComponent,
  ],
  imports: [CommonModule, BaseRoutingModule],
})
export class BaseModule {}
