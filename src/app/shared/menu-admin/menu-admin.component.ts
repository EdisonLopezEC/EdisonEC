import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.css'],
})
export class MenuAdminComponent implements OnInit {
  constructor() {}

  dockItems!: MenuItem[];
  ngOnInit(): void {
    this.dockItems = [
      {
        label: 'Skills',
        icon: './assets/icons/agencia.svg',
      },
      {
        label: 'Proyectos',
        icon: './assets/icons/agencia.svg',
      }
    ];
  }
}
