import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomeCategoryComponent } from './pages/home-category/home-category.component';
import { LayoutModule } from '../shared/components/layout/layout.module';
import { CategoryRoutingModule } from './category-routing.module';
import { PrimengModule } from '../shared/primeng/primeng.module';
import { ConfirmationService } from 'primeng/api';

@NgModule({
  declarations: [HomeCategoryComponent],
  imports: [
    CategoryRoutingModule,
    ReactiveFormsModule,
    PrimengModule,
    CommonModule,
    LayoutModule,
  ],
  providers: [ConfirmationService],
})
export class CategoryModule {}
