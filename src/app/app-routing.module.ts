import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillsComponent } from './skills/skills.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { ProjectsHomeComponent } from './projects-home/projects-home.component';
const routes: Routes = [
  
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'    
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
