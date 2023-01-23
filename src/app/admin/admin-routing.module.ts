import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SkillsComponent } from './pages/skills/skills.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'skills',
        component: SkillsComponent
      },
      {
        path: 'proyectos',
        component: ProyectosComponent
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
