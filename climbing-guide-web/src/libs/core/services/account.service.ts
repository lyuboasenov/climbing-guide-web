import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { EnvironmentSpecificService } from './environment-specific.service';
import { BaseService } from './base.service';
import { User } from '../models/user';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AccountService extends BaseService {

    constructor( http: HttpClient, envSpecificSvc: EnvironmentSpecificService ) {
        super( http, envSpecificSvc );
        this.serviceName = 'account_api';
    }

    register( username: string, email: string, password: string ): Observable<User> {
        const userRequest = {
            username: username,
            email: email,
            password: password
        };
        return this.http
            .post( this.formatApiUri( 'register' ), userRequest )
            .catch( this.handleRegisterError );
    }

    private handleRegisterError( err: HttpErrorResponse ) {
        let errorMessage = '';
        if ( err.error instanceof Error ) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            if(null != err.error.email) {
                errorMessage = `${errorMessage}\nEmail:`;
                for (let entry of err.error.email) {
                    errorMessage = `${errorMessage}\n\t${entry}\n`;
                }
            }
            if (null != err.error.username) {
                errorMessage = `${errorMessage}\nUsername:`;
                for (let entry of err.error.username) {
                    errorMessage = `${errorMessage}\n\t${entry}`;
                }
            }
            if (null != err.error.username) {
                errorMessage = `${errorMessage}\nPassword:`;
                for (let entry of err.error.password) {
                    errorMessage = `${errorMessage}\n\t${entry}`;
                }
            }
        }
        console.error( errorMessage );
        return Observable.throw( errorMessage );
    }

}
