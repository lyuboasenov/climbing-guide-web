import { FormComponent } from '../../core/components/form.component';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../core/services/authentication.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent extends FormComponent<boolean> {

    constructor(fb: FormBuilder,
        private authenticationService: AuthenticationService) {
        super(fb);
    }

    protected submitValid(): Observable<boolean> {
        const formModel = this.form.value;
        return this.authenticationService.login(formModel.username, formModel.password);
    }

    protected createForm(): FormGroup {
        return this.fb.group({
            username: ['', Validators.required],
            password: ['', Validators.required],
        });
    }
}
