import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillsComponent } from './skills/skills.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { ProyectosComponent } from './admin/pages/proyectos/proyectos.component';
import { ProjectsComponent } from './admin/pages/projects/projects.component';
import { ProjectsHomeComponent } from './projects-home/projects-home.component';
const routes: Routes = [
  
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'    
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'skills',
    component: SkillsComponent
  },
  {
    path: 'projects',
    component: ProjectsHomeComponent
  },

  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'admin',
    component: ProjectsComponent,
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    ...canActivate(()=>redirectUnauthorizedTo(['/']))
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
