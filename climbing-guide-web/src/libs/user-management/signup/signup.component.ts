import { Component, OnInit } from '@angular/core';
import { AccountService, AuthenticationService, User } from '../../core/index';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

    signupForm: FormGroup;

    constructor(private fb: FormBuilder,
        private accountService: AccountService,
        private authenticationService: AuthenticationService) {
        this.createForm();
    }

    ngOnInit() {
    }

    cancel(): void {
        this.signupForm.reset();
    }

    signup(): Observable<User> {
        if (this.signupForm.valid) {
            const formModel = this.signupForm.value;
            return this.accountService
                .register(formModel.username, formModel.email, formModel.password);
        }
    }

    createForm(): void {
        this.signupForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            username: ['', Validators.required],
            password: ['', Validators.required, Validators.minLength(8)],
            confirmPassword: ['', Validators.required, Validators.minLength(8)],
            captcha: [null, Validators.required],
        });
    }
}
