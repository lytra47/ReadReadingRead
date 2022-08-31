import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthorsComponent } from './authors/authors.component';
import { BaseComponent } from './base.component';
import { BooksComponent } from './books/books.component';

import { HomeComponent } from './home/home.component';
import { ViewAuthorComponent } from './view-author/view-author.component';
import { ViewBookComponent } from './view-book/view-book.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'authors', component: AuthorsComponent },
  { path: 'books', component: BooksComponent },
  { path: 'authors/view-author/:id', component: ViewAuthorComponent },
  { path: 'books/view-book/:id', component: ViewBookComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BaseRoutingModule {}
