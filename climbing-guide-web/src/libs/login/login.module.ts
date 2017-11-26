import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { CoreModule } from '../core/core.module';
import { MaterialAlertModule } from '../material-alert/material-alert.module';
import { MaterialAlertComponent } from '../material-alert/material-alert.component';
import {
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
} from '@angular/material';
@NgModule( {
    imports: [
        CommonModule,
        FormsModule,
        CoreModule,
        MaterialAlertModule,

        //Material design
        MatButtonModule,
        MatDialogModule,
        MatIconModule,
        MatInputModule,
    ],
    declarations: [
        LoginComponent
    ],
    exports: [
        LoginComponent
    ],
    entryComponents: [
        MaterialAlertComponent
    ],
} )
export class LoginModule { }
