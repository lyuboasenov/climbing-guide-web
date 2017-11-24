import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import { EqualTextValidator } from "angular2-text-equality-validator";
import { FormsModule }   from '@angular/forms';
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
        
        //material design
        MatButtonModule,
        MatDialogModule,
        MatIconModule,
        MatInputModule,
    ],
    declarations: [
        SignupComponent
    ],
    exports: [
        SignupComponent
    ],
    providers: [
        EqualTextValidator
    ]
} )
export class SignupModule { }
