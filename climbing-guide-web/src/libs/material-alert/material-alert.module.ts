import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialAlertComponent } from './material-alert.component'
import {
    MatDialogModule
} from '@angular/material';

@NgModule( {
    imports: [
        CommonModule,
        MatDialogModule
    ],
    exports: [
        MaterialAlertComponent
    ],
    declarations: [
        MaterialAlertComponent
    ]
} )
export class MaterialAlertModule { }
