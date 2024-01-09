import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { MegaMenuItem, MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  items: MenuItem[] = [];
  themeSelection: boolean = false;
  isScrolled: boolean = false;

  constructor(@Inject(DOCUMENT) private document: Document) {
    let theme = window.localStorage.getItem('theme');
    if (theme) {
      this.themeSelection = theme == 'dark' ? true : false;
      this.changeTheme(this.themeSelection);
    }
  }

  ngOnInit() {
    this.items = [
      {
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

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Check the scroll position and update the property accordingly
    this.isScrolled = window.scrollY > 50; // Adjust the threshold as needed
  }

  changeTheme(state: boolean) {
    console.log("ESTADOOO "+ state);
    let theme = state ? 'dark' : 'light';
    window.localStorage.setItem('theme', theme);
    let themeLink = this.document.getElementById('app-theme') as HTMLLinkElement;
    themeLink.href = 'lara-' + theme + '-purple' + '.css';
  }
}
