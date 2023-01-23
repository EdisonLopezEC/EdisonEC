import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SkillsService } from 'src/app/services/skills.service';
import { UserService } from 'src/app/services/user.service';


interface Skill {
  id?: string;
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
skill: Skill = {
  name: '',
  level: 0,
  description: '',
  bg: '',
  image: ''
};

display: boolean = false;

showDialog() {
  this.display = true;
}
saveSkill() {
  this.skillsService.addSkill(this.skill);
}

editSkill(skill: Skill) {
  console.log(skill)
  this.skill = skill;
  this.display = true;
  this.deleteSkill(skill.id+'');
}


deleteSkill(id: string) {
  this.skillsService.deleteSkill(id);
}



hideDialog() {
}

  skills: Skill[] = [
    {
      id: '1',
      name: 'Angular',
      level: 80,
      description: 'Angular es un framework de JavaScript para crear aplicaciones web y móviles.',
      bg: 'bg-primary',
      image: 'https://picsum.photos/200/300'
    },
    {
      id: '2',
      name: 'Firebase',
      level: 70,
      description: 'Firebase es una plataforma de desarrollo de aplicaciones móviles y web.',
      bg: 'bg-danger',
      image: 'https://picsum.photos/200/300'
    },
    {
      id: '3',
      name: 'HTML',
      level: 90,
      description: 'HTML es un lenguaje de marcado para la elaboración de páginas web.',
      bg: 'bg-success',
      image: 'https://picsum.photos/200/300'
    },
    {
      id: '4',
      name: 'CSS',
      level: 90,
      description: 'CSS es un lenguaje de hojas de estilo que se utiliza para describir la presentación de un documento HTML.',
      bg: 'bg-warning',
      image: 'https://picsum.photos/200/300'
    },
    {
      id: '5',
      name: 'JavaScript',
      level: 80,
      description: 'JavaScript es un lenguaje de programación interpretado, dialecto del estándar ECMAScript.',
      bg: 'bg-info',
      image: 'https://picsum.photos/200/300'
    },
    {
      id: '6',
      name: 'TypeScript',
      level: 80,
      description: 'TypeScript es un lenguaje de programación libre y de código abierto desarrollado y mantenido por Microsoft.',
      bg: 'bg-dark',
      image: 'https://picsum.photos/200/300'
    },
    {
      id: '7',
      name: 'Bootstrap',
      level: 90,
      description: 'Bootstrap es un framework o conjunto de herramientas de código abierto para diseño de sitios y aplicaciones web.',
      bg: 'bg-secondary',
      image: 'https://picsum.photos/200/300'
    },
    {
      id: '8',
      name: 'Material Design',
      level: 90,
      description: 'Material Design es un lenguaje de diseño creado por Google que combina la teoría del diseño clásico con la innovación y la tecnología.',
      bg: 'bg-light',
      image: 'https://picsum.photos/200/300'
    },
    {
      id: '9',
      name: 'SASS',
      level: 80,
      description: 'Sass es un lenguaje de hojas de estilo en cascada (CSS) que extiende CSS con características como variables, anidación, mixins, selectores anidados y más.',
      bg: 'bg-dark',
      image: 'https://picsum.photos/200/300'
    },
    {
      id: '10',
      name: 'Git',
      level: 80,
      description: 'Git es un software de control de versiones diseñado por Linus Torvalds, pensando en la eficiencia, la confiabilidad y la compatibilidad del mantenimiento de versiones de aplicaciones cuando estas tienen un gran número de archivos de código fuente.',
      bg: 'bg-primary',
      image: 'https://picsum.photos/200/300'
    },
    {
      id: '11',
      name: 'GitHub',
      level: 80,
      description: 'GitHub es una plataforma de desarrollo colaborativo de software para alojar proyectos utilizando el sistema de control de versiones Git.',
      bg: 'bg-danger',
      image: 'https://picsum.photos/200/300'
    },
    {
      id: '12',
      name: 'NodeJS',
      level: 70,
      description: 'Node.js es un entorno de ejecución para JavaScript construido con el motor de JavaScript V8 de Chrome.',
      bg: 'bg-success',
      image: 'https://picsum.photos/200/300'
    }
  ];
  constructor(private skillsService: SkillsService, private userService: UserService, private router: Router) { }

  logout(){
    this.userService.logout().then
    (() => {
      this.router.navigate(['/auth/login']);
    }
    ).catch(() => {
      console.log('error');
    }
    );
  }  
  
  ngOnInit(): void {

    this.skillsService.getSkills().subscribe((skills) => {
      this.skills = skills;
    });
  }

}
