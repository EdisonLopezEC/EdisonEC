import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from '../primeng/primeng.module';
import { MenuComponent } from './menu/menu.component';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';
import { FormsModule } from '@angular/forms';
import { ToggleComponent } from './swithc/switch.component';



@NgModule({
  declarations: [
    MenuComponent,
    MenuAdminComponent,
    ToggleComponent,
  ],
  imports: [
    CommonModule,
    PrimengModule,
    FormsModule
  ],
  exports: [
    MenuComponent,
    MenuAdminComponent
  ]

})
export class SharedModule { }
