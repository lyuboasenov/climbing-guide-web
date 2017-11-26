import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AlertModel } from './material-alert.model';
@Component( {
    selector: 'app-material-alert',
    templateUrl: './material-alert.component.html',
    styleUrls: ['./material-alert.component.css']
} )
export class MaterialAlertComponent {

    constructor( private dialogRef: MatDialogRef<MaterialAlertComponent>, @Inject( MAT_DIALOG_DATA ) public model: AlertModel ) {

    }

    onAction( action ) {
        this.dialogRef.close( action.result );
    }

}
