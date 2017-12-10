import { FormDialogComponent } from '../../core/components/form-dialog.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MaterialAlertComponent } from '../../material-alert/material-alert.component';
import { AuthenticationService } from '../../core/index';
import { LoginComponent } from './login.component';

@Component( {
    selector: 'app-login-dialog',
    templateUrl: './login-dialog.component.html',
    styleUrls: ['./login.component.css']
} )
export class LoginDialogComponent extends FormDialogComponent<LoginDialogComponent, LoginComponent, boolean> {

    submitLabel: string = 'Login';

    constructor(dialogRef: MatDialogRef<LoginDialogComponent>,
            dialog: MatDialog ) { super(dialogRef, dialog); }

    protected handleSubmitResult(result: boolean) {
        if (!result) {
            const dialogRef = this.dialog.open( MaterialAlertComponent, {
                data: {
                    message: 'Unable to authenticate. Please try again later.',
                    actions: [
                        { text: 'OK', result: true }
                    ]
                }
            } );
        }
    }
}
