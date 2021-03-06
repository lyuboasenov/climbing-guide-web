import { Component, OnInit, ViewChild } from '@angular/core';
import { Region } from '../../core/models/region';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AddRouteComponent } from './add-route.component';
import { MatDialogRef, MatDialog } from '@angular/material';
import { FormDialogComponent } from '../../core/components/form-dialog.component';
import { MaterialAlertComponent } from '../../material-alert/material-alert.component';

@Component( {
    selector: 'app-add-route-dialog',
    templateUrl: './add-route-dialog.component.html',
    styleUrls: ['./add-route-dialog.component.css']
} )
export class AddRouteDialogComponent extends FormDialogComponent<AddRouteDialogComponent, AddRouteComponent, boolean> {

    constructor(dialogRef: MatDialogRef<AddRouteDialogComponent>,
        dialog: MatDialog ) { super(dialogRef, dialog); }

    protected handleSubmitResult(result: boolean) {
        if (!result) {
            const dialogRef = this.dialog.open( MaterialAlertComponent, {
                data: {
                    message: 'Unable to add route. Please try again later.',
                    actions: [
                        { text: 'OK', result: true }
                    ]
                }
            } );
        }
    }
}
