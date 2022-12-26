import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeCategoryComponent } from './pages/home-category/home-category.component';

const routes: Routes = [
  {
    path: '',
    component: HomeCategoryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryRoutingModule {}
