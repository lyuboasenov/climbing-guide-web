import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
//import { TextEqualityValidatorModule } from "ngx-text-equality-validator";
import { RecaptchaModule } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { MaterialAlertModule } from '../material-alert/material-alert.module';
import { MaterialAlertComponent } from '../material-alert/material-alert.component';
import {
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
} from '@angular/material';


@NgModule( {
    imports: [
        CommonModule,
        FormsModule,
        //TextEqualityValidatorModule,
        RecaptchaModule.forRoot(), // Keep in mind the "forRoot"-magic nuances!
        RecaptchaFormsModule,
        CoreModule,
        MaterialAlertModule,

        //material design
        MatButtonModule,
        MatDialogModule,
        MatIconModule,
        MatInputModule,
    ],
    declarations: [
        SignupComponent
    ],
    exports: [
        SignupComponent
    ],
    entryComponents: [
        MaterialAlertComponent
    ],
    providers: [

    ]
} )
export class SignupModule { }
