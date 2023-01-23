import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PrimengModule } from '../primeng/primeng.module';
import { AdminRoutingModule } from './admin-routing.module';
import { SkillsComponent } from './pages/skills/skills.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';



@NgModule({
  declarations: [
    SkillsComponent,
    ProyectosComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PrimengModule,
    AdminRoutingModule,
    FlexLayoutModule,
  ]
})
export class AdminModule { }
