import { NgModule } from '@angular/core';

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextModule } from 'primeng/inputtext';
import { GalleriaModule } from 'primeng/galleria';
import { SidebarModule } from 'primeng/sidebar';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';

@NgModule({
  exports: [
    ConfirmDialogModule,
    InputTextModule,
    GalleriaModule,
    SidebarModule,
    MenubarModule,
    ButtonModule,
    AvatarModule,
    TableModule,
    CardModule,
  ],
})
export class PrimengModule {}
