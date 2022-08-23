import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './base/base.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./base/base.module').then((m) => m.BaseModule),
  },
  { path: '', component: BaseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
