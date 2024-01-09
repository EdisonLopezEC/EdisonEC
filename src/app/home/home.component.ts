import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { ElementRef, ViewChild, AfterViewInit, Renderer2 } from '@angular/core';

interface Skill {
  name: string;
  level: number;
  description: string;
  bg: string;
  image: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    @ViewChild('projectsSection') projectsSection!: ElementRef;
    private scrollListener: () => void = () => {}; // Initialize with a no-op function
    skills: Skill[]= []
    
    isMobile() {
        return window.innerWidth < 750;
    }
  constructor(private router: Router, private renderer: Renderer2) { }

  ngAfterViewInit() {
    // Call the function to set up the scroll listener
    this.setupScrollListener();
  }

  setupScrollListener() {
    // Add scroll event listener to the window
    this.scrollListener = this.renderer.listen('window', 'scroll', () => {
      // Get the scroll position
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

      // Determine the offset of the Projects section from the top
      const projectsSectionOffset = this.projectsSection.nativeElement.offsetTop;

      // Define a threshold to trigger the scroll (adjust as needed)
      const scrollThreshold = 100;

      // Check if the user has scrolled to or past the threshold
      if (scrollPosition >= projectsSectionOffset - scrollThreshold) {
        // Scroll to the Projects section
        this.projectsSection.nativeElement.scrollIntoView({ behavior: 'smooth' });

        // Remove the scroll listener after scrolling to the Projects section
        this.scrollListener(); // Remove the event listener
      }
    });
  }


  display: boolean = false;
  dockItems: MenuItem[] = [];

    showDialog(){
        this.display = true;
    }
    openLink(link: string){
        window.open(link, "_blank");
    }
    ngOnInit() {

      this.skills = [
        {
          name: 'JavaScript',
          level: 70,
          description: 'Lenguaje ligero, interpretado y orientado a objetos con funciones de primera clase',
          bg: 'rgba(229, 176, 69, 0.22)',
          image: '/assets/skills/javascript.svg',
        },
        {
          name: 'HTML',
          level: 90,
          description: 'Lenguaje de marcado utilizado para crear estructuras de páginas web',
          bg: 'rgba(241, 100, 57, 0.22)',
          image: '/assets/skills/html.svg',
        },
        {
          name: 'CSS',
          level: 80,
          description: 'Lenguaje utilizado para dar estilo y diseño a todo tipo de aplicación web y movil',
          bg: 'rgba(2, 121, 189, 0.22)',
          image: '/assets/skills/css.svg',
        },
        {
          name: 'Java',
          level: 80,
          description: 'Lenguaje de programación orientado a objetos utilizado para todo tipo de desarrollo',
          bg: 'rgba(83, 130, 161, 0.22)',
          image: '/assets/skills/java.svg'
        },
        {
          name: 'Angular',
          level: 70,
          description: 'Framework de aplicación web utilizado para desarrollar aplicaciones de una sola página',
          bg: 'rgba(226, 50, 56, 0.22)',
          image: '/assets/skills/angular.svg',
        },
        {
          name: 'React',
          level: 60,
          description: 'Biblioteca de JavaScript utilizada para construir interfaces de usuario interactivas y reutilizables',
          bg: 'rgba(0, 217, 255, 0.22)',
          image: '/assets/skills/react.svg',
        },
        {
          name: 'PHP',
          level: 60,
          description: 'Lenguaje de script del lado del servidor utilizado para construir aplicaciones web dinámicas',
          bg: 'rgba(97, 130, 182, 0.22)',
          image: '/assets/skills/php.svg',
        },
        {
          name: 'Next.js',
          level: 60,
          description: 'Framework de aplicación web de React utilizado para construir aplicaciones web escalables y de alto rendimiento',
          bg: 'rgba(160, 160, 160, 0.22)',
          image: '/assets/skills/next.svg',
        }
      ];    
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
