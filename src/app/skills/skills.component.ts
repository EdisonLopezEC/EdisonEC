import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../services/skills.service';

interface Skill {
  name: string;
  level: number;
  description: string;
  bg: string;
  image: string;
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
      level: 70,
      description:'Lenguaje ligero, interpretado y orientado a objetos con funciones de primera clase',
      bg: 'rgba(229, 176, 69, 0.22)',
      image: '/assets/skills/javascript.svg',
    },
    {
      name: 'HTML',
      level: 90,
      description: 'Lenguaje ligero, interpretado y orientado a objetos con funciones de primera clase',
      bg: 'rgba(241, 100, 57, 0.22)',
      image: '/assets/skills/html.svg',
    },
    {
      name: 'CSS',
      level: 80,
      description: 'Lenguaje ligero, interpretado y orientado a objetos con funciones de primera clase',
      bg: 'rgba(2, 121, 189, 0.22)',
      image: '/assets/skills/css.svg',
    },
    {
      name: 'Java',
      level: 80,
      description: 'Lenguaje ligero, interpretado y orientado a objetos con funciones de primera clase',
      bg: 'rgba(83, 130, 161, 0.22)',
      image: '/assets/skills/java.svg'
    },
    {
      name: 'Angular',
      level: 70,
      description: 'Lenguaje ligero, interpretado y orientado a objetos con funciones de primera clase',
      bg: 'rgba(226, 50, 56, 0.22)',
      image: '/assets/skills/angular.svg',
    },
    {
      name: 'React',
      level: 60,
      description: 'Lenguaje ligero, interpretado y orientado a objetos con funciones de primera clase',
      bg: 'rgba(0, 217, 255, 0.22)',
      image: '/assets/skills/react.svg',
    },
    {
      name: 'PHP',
      level: 60,
      description: 'Lenguaje ligero, interpretado y orientado a objetos con funciones de primera clase',
      bg: 'rgba(97, 130, 182, 0.22)',
      image: '/assets/skills/php.svg',
    },
    {
      name: 'Next.js',
      level: 60,
      description: 'Lenguaje ligero, interpretado y orientado a objetos con funciones de primera clase',
      bg: 'rgba(0, 0, 0, 0.22)',
      image: '/assets/skills/next.svg',
    }];

    this.skillService.getSkills().subscribe(skills => {
      this.skills = [...this.skills, ...skills];
    });
  }



}
