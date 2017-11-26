import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MaterialAlertComponent } from '../material-alert/material-alert.component';
import { AuthenticationService } from '../core/services/authentication.service';

@Component( {
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
} )
export class LoginComponent implements OnInit {

    username: string = "";
    password: string = "";

    constructor(private dialogRef: MatDialogRef<LoginComponent>,
            private authenticationService: AuthenticationService,
            public dialog: MatDialog ) { }

    ngOnInit() {
    }

    cancel(): void {
        this.username = "";
        this.password = "";
        this.dialogRef.close( false );
    }

    login(): void {
        this.dialogRef.close( true );
        this.authenticationService.login(this.username, this.password)
        .subscribe(result => {
            if (!result) {
                let dialogRef = this.dialog.open( MaterialAlertComponent, {
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
