import { NgModule } from '@angular/core';

import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';

@NgModule({
  exports: [SidebarModule, ButtonModule],
})
export class PrimengModule {}
