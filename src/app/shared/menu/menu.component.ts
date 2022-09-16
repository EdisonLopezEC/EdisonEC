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
            routerLink: '/'
            
        },
        {
            label: 'Contact',
            routerLink: 'contact'
        }];
    }
}
