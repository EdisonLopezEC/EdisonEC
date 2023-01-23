import { Component, OnInit } from '@angular/core';
import { CollectionReference, DocumentData } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { ProjectsService } from 'src/app/services/projects.service';
import { UserService } from 'src/app/services/user.service';

interface Proyecto{
  id?: string;
  nombre: string;
  descripcion: string;
  url: string;
  tecnologias: string;
  plataformas: string;
}

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyecto: Proyecto = {
    nombre: '',
    descripcion: '',
    url: '',
    tecnologias: '',
    plataformas: ''
  };

display: boolean = false;


  showDialog() {
    this.display = true;
  }

  saveProyecto() {
    this.projectService.addProject(this.proyecto);
  }
  editProject(skill: Proyecto) {
    console.log(skill)
    this.proyecto = skill;
    this.display = true;
    this.deleteProject(skill.id+'');
  }

  deleteProject(id: string) {
    console.log('llego al delete')
    this.projectService.deleteProjects(id);
  }

  hideDialog() {
  }
  

  proyectos: Proyecto[] = [
    {
      id: '1',
      nombre: 'Proyecto 1',
      descripcion: 'Descripcion del proyecto 1',
      url: 'https://www.google.com',
      tecnologias: 'Angular, Firebase',
      plataformas: 'Web'
    },
    {
      id: '2',
      nombre: 'Proyecto 2',
      descripcion: 'Descripcion del proyecto 2',
      url: 'https://www.google.com',
      tecnologias: 'Angular, Firebase',
      plataformas: 'Web'
    },
    {
      id: '3',
      nombre: 'Proyecto 3',
      descripcion: 'Descripcion del proyecto 3',
      url: 'https://www.google.com',
      tecnologias: 'Angular, Firebase',
      plataformas: 'Web'
    },
    {
      id: '4',
      nombre: 'Proyecto 4',
      descripcion: 'Descripcion del proyecto 4',
      url: 'https://www.google.com',
      tecnologias: 'Angular, Firebase',
      plataformas: 'Web'
    }

  ]

  constructor(private userService: UserService, private router: Router, private projectService: ProjectsService) {

  }

  

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


  // productDialog: boolean;


  // product!: Proyecto;

  // selectedProducts: Product[];

  // submitted: boolean;


   
  ngOnInit(): void {
 
    this.projectService.getProjects().subscribe((skills) => {
      this.proyectos = skills;
    });
  }


}
