import { FormComponent } from '../../core/components/form.component';
import { Component, OnInit } from '@angular/core';
import { AccountService, AuthenticationService, User } from '../../core/index';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent extends FormComponent<User> {

    constructor(fb: FormBuilder,
        private accountService: AccountService,
        private authenticationService: AuthenticationService) {
            super(fb);
        }

    protected submitValid(): Observable<User> {
        const formModel = this.form.value;
        return this.accountService
            .register(formModel.username, formModel.email, formModel.password);
    }

    protected createForm(): FormGroup {
        return this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            username: ['', Validators.required],
            password: ['', Validators.required, Validators.minLength(8)],
            confirmPassword: ['', Validators.required, Validators.minLength(8)],
            captcha: [null, Validators.required],
        });
    }
}
