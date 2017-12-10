import { AddRegionComponent } from './add-region.component';
import { Component, OnInit } from '@angular/core';
import { Region } from '../../core/models/region';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { FormDialogComponent } from '../../core/components/form-dialog.component';
import { MatDialogRef, MatDialog } from '@angular/material';
import { MaterialAlertComponent } from '../../material-alert/material-alert.component';

@Component( {
    selector: 'app-add-region-dialog',
    templateUrl: './add-region-dialog.component.html',
    styleUrls: ['./add-region-dialog.component.css']
} )
export class AddRegionDialogComponent extends FormDialogComponent<AddRegionDialogComponent, AddRegionComponent, boolean> {

    constructor(dialogRef: MatDialogRef<AddRegionDialogComponent>,
        dialog: MatDialog ) { super(dialogRef, dialog); }

    protected handleSubmitResult(result: boolean) {
        if (!result) {
            const dialogRef = this.dialog.open( MaterialAlertComponent, {
                data: {
                    message: 'Unable to add region. Please try again later.',
                    actions: [
                        { text: 'OK', result: true }
                    ]
                }
            } );
        }
    }
}
