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
import {RippleModule} from 'primeng/ripple';
import {KnobModule} from 'primeng/knob';
import {CheckboxModule} from 'primeng/checkbox';
import {PasswordModule} from 'primeng/password';
import {InputSwitchModule} from 'primeng/inputswitch';
import {TableModule} from 'primeng/table';
import {PaginatorModule} from 'primeng/paginator';
import {ToastModule} from 'primeng/toast';
import {ToolbarModule} from 'primeng/toolbar';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {RatingModule} from 'primeng/rating';
import {ChipsModule} from 'primeng/chips';
import {ProgressBarModule} from 'primeng/progressbar';

@NgModule({

  exports: [
    InputSwitchModule,
    ButtonModule,
    CardModule,
    MenubarModule,
    InputTextModule,
    FieldsetModule,
    MenuModule,
    PanelMenuModule,
    DockModule,
    DialogModule,
    RippleModule,
    KnobModule,
    CheckboxModule,
    PasswordModule,
    TableModule,
    PaginatorModule,
    ToastModule,
    ToolbarModule,
    ConfirmDialogModule,
    RatingModule,
    ChipsModule,
    ProgressBarModule

  ]
})
export class PrimengModule { }