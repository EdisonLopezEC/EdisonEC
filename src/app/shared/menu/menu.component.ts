import { Component, OnInit } from '@angular/core';
import {MegaMenuItem,MenuItem} from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})

export class MenuComponent implements OnInit {

    items: MenuItem[] = [];

    ngOnInit() {
        this.items = [{
            label: 'Home',
            icon: 'pi pi-user',
            routerLink: '/'
            
        },
        {
            label: 'Skills',
            icon: 'pi pi-cog',
            routerLink: 'skills'
        },
        {
            label: 'Contact',
            icon: 'pi pi-phone',

            routerLink: 'contact'
        },
    ];
    }
}
