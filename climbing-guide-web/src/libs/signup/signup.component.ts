import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AccountService } from '../core/services/account.service';
import { MaterialAlertComponent } from '../material-alert/material-alert.component';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

@Component( {
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
} )
export class SignupComponent implements OnInit {

    email: string = "";
    username: string = "";
    password: string = "";
    confirmPassword: string = "";
    captcha: string = "";
    private formReset: boolean = false;

    constructor( private dialogRef: MatDialogRef<SignupComponent>,
        private accountService: AccountService,
        public dialog: MatDialog ) { }

    ngOnInit() {
    }

    cancel(): void {
        this.formReset = true;
        this.email = "";
        this.username = "";
        this.password = "";
        this.confirmPassword = "";
        this.dialogRef.close( false );
    }

    signup(): void {
        if ( !this.formReset ) {
            this.accountService.register( this.username, this.email, this.password )
                .subscribe(
                result => {
                    this.dialogRef.close( true );
                    console.log( result );
                },
                error => {
                    let dialogRef = this.dialog.open( MaterialAlertComponent, {
                        data: {
                            message: error,
                            actions: [
                                { text: 'OK', result: true }
                            ]
                        }
                    } );
                } );
        }
    }

}
