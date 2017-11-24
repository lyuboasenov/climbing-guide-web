import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component( {
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
} )
export class LoginComponent implements OnInit {

    username: string = "";
    password: string = "";

    constructor(private dialogRef: MatDialogRef<LoginComponent>) { }

    ngOnInit() {
    }

    cancel(): void {
        this.username = "";
        this.password = "";
        this.dialogRef.close( false );
    }

    login(): void {
        this.dialogRef.close( true );
    }
}
