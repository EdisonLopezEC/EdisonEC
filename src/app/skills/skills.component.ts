import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../services/skills.service';

interface Skill {
  name: string;
  level: number;
  description: string;
  bg: string;
  image: string;
  experience?: string;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor(private skillService: SkillsService) { }
  skills: Skill[] = [];
    
 
  ngOnInit(): void {
    this.skills = [
      {
        name: 'JavaScript',
        level: 90,
        description: 'Lenguaje ligero, interpretado y orientado a objetos con funciones de primera clase y tipado dinámico',
        bg: 'rgba(229, 176, 69, 0.22)',
        image: '/assets/skills/javascript.svg',
        experience: '3 años'
      },
      {
        name: 'HTML',
        level: 90,
        description: 'Lenguaje de marcado utilizado para crear estructuras de páginas web y aplicaciones web',
        bg: 'rgba(241, 100, 57, 0.22)',
        image: '/assets/skills/html.svg',
        experience: '3 años'
      },
      {
        name: 'CSS',
        level: 80,
        description: 'Hojas de estilo en cascada utilizadas para diseñar la apariencia de las páginas web y aplicaciones web',
        bg: 'rgba(2, 121, 189, 0.22)',
        image: '/assets/skills/css.svg',
        experience: '3 años'
      },
      {
        name: 'Java',
        level: 80,
        description: 'Lenguaje de programación orientado a objetos utilizado para todo tipo de desarrollo',
        bg: 'rgba(83, 130, 161, 0.22)',
        image: '/assets/skills/java.svg',
        experience: '3 años'
      },
      {
        name: 'Angular',
        level: 70,
        description: 'Framework de aplicación web utilizado para desarrollar aplicaciones de una sola página',
        bg: 'rgba(226, 50, 56, 0.22)',
        image: '/assets/skills/angular.svg',
        experience: '1 año'
      },
      {
        name: 'React',
        level: 90,
        description: 'Biblioteca de JavaScript utilizada para construir interfaces de usuario interactivas y reutilizables',
        bg: 'rgba(0, 217, 255, 0.22)',
        image: '/assets/skills/react.svg',
        experience: '3 años'
      },
      {
        name: 'PHP',
        level: 60,
        description: 'Lenguaje de script del lado del servidor utilizado para construir aplicaciones web dinámicas',
        bg: 'rgba(97, 130, 182, 0.22)',
        image: '/assets/skills/php.svg',
        experience: '2 años'
      },
      {
        name: 'Next.js',
        level: 80,
        description: 'Framework de aplicación web de React utilizado para construir aplicaciones web escalables y de alto rendimiento',
        bg: 'rgba(160, 160, 160, 0.22)',
        image: '/assets/skills/next.svg',
        experience: '2 años'
      }
    ];    

    this.skillService.getSkills().subscribe(skills => {
      this.skills = [...this.skills, ...skills];
    });
  }



}
