import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../services/projects.service';
interface Proyecto{
  id?: string;
  nombre: string;
  descripcion: string;
  url: string;
  tecnologias: string;
  plataformas: string;
}
@Component({
  selector: 'app-projects-home',
  templateUrl: './projects-home.component.html',
  styleUrls: ['./projects-home.component.css']
})
export class ProjectsHomeComponent implements OnInit {
projects: Proyecto[] = []

  constructor(private projectsService: ProjectsService) { }
  openLink(link: string){
    window.open(link, "_blank");
}

  ngOnInit(): void {
    this.projects = [
      {
        id: '1',
        nombre: 'Gestin',
        descripcion: 'Descripcion del proyecto 1',
        url: 'https://www.google.com',
        tecnologias: 'React, React Native, Firebase',
        plataformas: 'Web, Movil'
      },
    ]

    this.projectsService.getProjects().subscribe(
      res => {
        this.projects = [...this.projects, ...res]
      }
    )

  }

}
