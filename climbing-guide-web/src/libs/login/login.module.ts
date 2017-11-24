import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
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
    ]
} )
export class LoginModule { }
