import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent {
  items: MenuItem[] = [];

  constructor(
    private readonly route: ActivatedRoute,
    private readonly location: Location
  ) {}

  ngOnInit() {
    this.items = [
      {
        label: 'Productos',
        icon: 'pi pi-fw pi-pencil',
        routerLink: '/productos',
      },
      {
        label: 'Categorías',
        icon: 'pi pi-fw pi-pencil',
        routerLink: '/categorias',
      },
    ];
  }
}
