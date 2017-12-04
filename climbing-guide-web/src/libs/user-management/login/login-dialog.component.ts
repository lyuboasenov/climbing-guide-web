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
export class LoginDialogComponent implements OnInit {
    @ViewChild(LoginComponent)
    private loginComponent: LoginComponent;

    constructor(private dialogRef: MatDialogRef<LoginDialogComponent>,
            public dialog: MatDialog ) { }

    ngOnInit() {
    }

    close(result: boolean) {
        this.dialogRef.close( result );
    }

    cancel(): void {
        this.close( false );
    }

    login(): void {
        this.close( true );
        this.loginComponent.login()
        .subscribe(result => {
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
        });
    }
}
