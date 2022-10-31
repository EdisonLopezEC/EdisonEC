import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './pages/projects/projects.component';
import { SharedModule } from '../shared/shared.module';
import { PrimengModule } from '../primeng/primeng.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    PrimengModule
  ]
})
export class AdminModule { }
