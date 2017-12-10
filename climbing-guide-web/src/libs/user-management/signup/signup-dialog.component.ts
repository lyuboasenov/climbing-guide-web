import { FormDialogComponent } from '../../core/components/form-dialog.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MaterialAlertComponent } from '../../material-alert/material-alert.component';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { SignupComponent } from './signup.component';
import { User } from '../../core/index';

@Component({
    selector: 'app-signup-dialog',
    templateUrl: './signup-dialog.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupDialogComponent extends FormDialogComponent<SignupDialogComponent, SignupComponent, User> {

    submitLabel: string = 'Signup';

    constructor(dialogRef: MatDialogRef<SignupDialogComponent>,
        dialog: MatDialog) { super(dialogRef, dialog); }

    protected handleSubmitResult(result: User) {
        this.dialog.open(MaterialAlertComponent, {
            data: {
                message: `User ${result.username} create. You can authenticate with it.`,
                actions: [
                    { text: 'OK', result: true }
                ]
            }
        });
    }
}
