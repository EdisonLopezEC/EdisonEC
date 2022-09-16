import { NgModule } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {MenubarModule} from 'primeng/menubar';
import {InputTextModule} from 'primeng/inputtext';
import {FieldsetModule} from 'primeng/fieldset';
import {MenuModule} from 'primeng/menu';
import {PanelMenuModule} from 'primeng/panelmenu';
import {DockModule} from 'primeng/dock';
import {DialogModule} from 'primeng/dialog';


@NgModule({

  exports: [
    ButtonModule,
    CardModule,
    MenubarModule,
    InputTextModule,
    FieldsetModule,
    MenuModule,
    PanelMenuModule,
    DockModule,
    DialogModule
  ]
})
export class PrimengModule { }