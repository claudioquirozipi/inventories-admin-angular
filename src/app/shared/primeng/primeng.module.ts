import { NgModule } from '@angular/core';

import { InputTextModule } from 'primeng/inputtext';
import { GalleriaModule } from 'primeng/galleria';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@NgModule({
  exports: [
    InputTextModule,
    GalleriaModule,
    SidebarModule,
    ButtonModule,
    CardModule,
  ],
})
export class PrimengModule {}
