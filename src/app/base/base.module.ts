import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseRoutingModule } from './base-routing.module';
import { BaseComponent } from './base.component';
import { HomeComponent } from './home/home.component';
import { AuthorsComponent } from './authors/authors.component';
import { BooksComponent } from './books/books.component';

@NgModule({
  declarations: [
    BaseComponent,
    HomeComponent,
    AuthorsComponent,
    BooksComponent,
  ],
  imports: [CommonModule, BaseRoutingModule],
})
export class BaseModule {}
