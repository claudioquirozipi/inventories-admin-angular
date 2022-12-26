import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PrimengModule } from '../../primeng/primeng.module';
import { LayoutComponent } from './layout.component';

@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule, PrimengModule],
  exports: [LayoutComponent],
})
export class LayoutModule {}
