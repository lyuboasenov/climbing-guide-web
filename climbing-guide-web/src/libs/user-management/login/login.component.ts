import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../core/services/authentication.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;

    constructor(private fb: FormBuilder,
        private authenticationService: AuthenticationService) {
        this.createForm();
    }

    ngOnInit() {
    }

    reset(): void {
        this.loginForm.reset();
    }

    login(): Observable<boolean> {
        if (this.loginForm.valid) {
            const formModel = this.loginForm.value;
            return this.authenticationService.login(formModel.username, formModel.password);
        }
    }

    private createForm(): void {
        this.loginForm = this.fb.group({
            username: ['', Validators.required],
            password: ['', Validators.required],
        });
    }
}
