import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import {MegaMenuItem,MenuItem} from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  
})

export class MenuComponent implements OnInit {

    items: MenuItem[] = [];
  themeSelection: boolean = false;

  constructor( @Inject(DOCUMENT) private document: Document){
    let theme = window.localStorage.getItem('theme');
    if(theme){
        this.themeSelection = theme == 'dark' ? true : false;
        this.changeTheme(this.themeSelection);
    }
  }

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
            label: 'Projects',
            icon: 'pi pi-briefcase',
            routerLink: 'projects'
        },
        {
            label: 'Contact',
            icon: 'pi pi-phone',

            routerLink: 'contact'
        },
 
    ];
    }

    changeTheme(state: boolean){
        console.log(state);
        let theme = state ? 'dark' : 'light';
        window.localStorage.setItem('theme', theme);
        let themeLink = this.document.getElementById('app-theme') as HTMLLinkElement;
        themeLink.href = 'lara-' + theme + '-purple'+'.css';	
    } 
}
