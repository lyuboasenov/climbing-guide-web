import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BaseService } from './base.service';
import { User } from '../models/user';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch'

@Injectable()
export class AccountService extends BaseService {

    constructor( http: HttpClient) {
        super( http );
        this.serviceName = 'account_api';
        
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    register( username: string, email: string, password: string ): Observable<User> {
        return this.http
            .post( this.formatApiUri( 'register' ), {
                username: username,
                email: email,
                password: password
            } )
            .catch( this.handleRegisterError );
    }

    private handleRegisterError( err: HttpErrorResponse ) {
        let errorMessage = '';
        if ( err.error instanceof Error ) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            if ( null != err.error.email ) {
                errorMessage = `${errorMessage}\nEmail:`;
                for ( let entry of err.error.email ) {
                    errorMessage = `${errorMessage}\n\t${entry}\n`;
                }
            }
            if ( null != err.error.username ) {
                errorMessage = `${errorMessage}\nUsername:`;
                for ( let entry of err.error.username ) {
                    errorMessage = `${errorMessage}\n\t${entry}`;
                }
            }
            if ( null != err.error.username ) {
                errorMessage = `${errorMessage}\nPassword:`;
                for ( let entry of err.error.password ) {
                    errorMessage = `${errorMessage}\n\t${entry}`;
                }
            }
        }
        console.error( errorMessage );
        return Observable.throw( errorMessage );
    }

}
