import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

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

    constructor( private dialogRef: MatDialogRef<SignupComponent> ) { }

    ngOnInit() {
    }

    cancel(): void {
        this.email = "";
        this.username = "";
        this.password = "";
        this.confirmPassword = "";
        this.dialogRef.close( false );
    }

    signup(): void {
        this.dialogRef.close( true );
    }

}
