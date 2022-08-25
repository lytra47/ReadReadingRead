import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddBookComponent } from './add-book/add-book.component';
import { AddAuthorComponent } from './add-author/add-author.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import { DeleteAuthorComponent } from './delete-author/delete-author.component';



@NgModule({
  declarations: [
    AddBookComponent,
    AddAuthorComponent,
    DeleteBookComponent,
    DeleteAuthorComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
