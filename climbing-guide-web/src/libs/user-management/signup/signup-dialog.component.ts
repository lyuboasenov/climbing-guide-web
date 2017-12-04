import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MaterialAlertComponent } from '../../material-alert/material-alert.component';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { SignupComponent } from './signup.component';

@Component({
    selector: 'app-signup-dialog',
    templateUrl: './signup-dialog.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupDialogComponent implements OnInit {
    @ViewChild(SignupComponent)
    signupComponent: SignupComponent;

    constructor(private dialogRef: MatDialogRef<SignupDialogComponent>,
        public dialog: MatDialog) { }

    ngOnInit() {
    }

    close(result: boolean) {
        this.dialogRef.close(result);
    }
    cancel(): void {
        this.close(false);
    }

    signup(): void {
        this.close(true);
        this.signupComponent.signup()
            .subscribe(result => {
                this.dialog.open(MaterialAlertComponent, {
                    data: {
                        message: `User ${result.username} create. You can authenticate with it.`,
                        actions: [
                            { text: 'OK', result: true }
                        ]
                    }
                });
            },
            error => {
                const dialogRef = this.dialog.open(MaterialAlertComponent, {
                    data: {
                        message: error,
                        actions: [
                            { text: 'OK', result: true }
                        ]
                    }
                });
            });
    }
}
