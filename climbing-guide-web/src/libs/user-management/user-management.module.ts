// Common
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Own modules/components
import { LoginComponent } from './login/login.component';
import { LoginDialogComponent } from './login/login-dialog.component';
import { SignupComponent } from './signup/signup.component';
import { SignupDialogComponent } from './signup/signup-dialog.component';
import { CoreModule } from '../core/core.module';
import { MaterialAlertModule } from '../material-alert/material-alert.module';
import { MaterialAlertComponent } from '../material-alert/material-alert.component';

// Material design
import {
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
} from '@angular/material';

// Other
import { RecaptchaModule } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';
// import { TextEqualityValidatorModule } from 'ngx-text-equality-validator';

@NgModule( {
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CoreModule,
        MaterialAlertModule,

        // Material design
        MatButtonModule,
        MatDialogModule,
        MatIconModule,
        MatInputModule,

        RecaptchaModule.forRoot(),
        RecaptchaFormsModule,
        // TextEqualityValidatorModule
    ],
    declarations: [
        LoginComponent,
        LoginDialogComponent,
        SignupComponent,
        SignupDialogComponent
    ],
    exports: [
        LoginComponent,
        LoginDialogComponent,
        SignupComponent,
        SignupDialogComponent
    ],
    entryComponents: [
        MaterialAlertComponent
    ],
} )
export class UserManagementModule { }
