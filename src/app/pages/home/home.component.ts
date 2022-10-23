import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    isMobile() {
        return window.innerWidth < 750;
    }
  constructor() { }
    
  display: boolean = false;
  dockItems: MenuItem[] = [];

    showDialog(){
        this.display = true;
    }
        
    ngOnInit() {
        this.dockItems = [
            {
                label: 'Finder',
                icon: "pi pi-check"
            },
            {
                label: 'App Store',
                icon: "assets/showcase/images/dock/appstore.svg"
            },
            {
                label: 'Photos',
                icon: "assets/showcase/images/dock/photos.svg"
            },
            {
                label: 'Trash',
                icon: "assets/showcase/images/dock/trash.png"
            }
        ];
  }
};
