import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAuthorComponent } from './admin/add-author/add-author.component';
import { AddBookComponent } from './admin/add-book/add-book.component';
import { DeleteAuthorComponent } from './admin/delete-author/delete-author.component';
import { DeleteBookComponent } from './admin/delete-book/delete-book.component';
import { BaseComponent } from './base/base.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./base/base.module').then((m) => m.BaseModule),
  },
  { path: '', component: BaseComponent },
  { path: 'add-author', component: AddAuthorComponent },
  { path: 'add-book', component: AddBookComponent },
  { path: 'delete-author', component: DeleteAuthorComponent },
  { path: 'delete-book', component: DeleteBookComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
