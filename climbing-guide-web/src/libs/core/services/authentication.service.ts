import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { EnvironmentSpecificService } from './environment-specific.service';
import { BaseService } from './base.service';
import { User } from '../models/user';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthenticationService extends BaseService {
    token: string;
    private clientId = 'HvmqNrOCspOvzVjPcPGSn2Vfo4kj44j0LO7bW8Vh';
    private clientSecret = 'k931EU92lZx0kW3pTdIkY57yXLHyervqGBNeQvHZdDGn0mCNunRjpRQdst4KzrahzXIVDPQXrllkHgg8libsGBaGpAnIZUruA6414pWE9lXu2hW7S5CCkfBIYvU0pbvY';

    constructor( http: HttpClient, envSpecificSvc: EnvironmentSpecificService ) {
        super( http, envSpecificSvc );
        this.serviceName = 'o';

        // set token if saved in local storage
        var currentUser = JSON.parse( localStorage.getItem( 'currentUser' ) );
        this.token = currentUser && currentUser.token;
    }

    login( username: string, password: string ): Observable<boolean> {
        const body = new HttpParams()
            .set( 'username', username )
            .set( 'password', password )
            .set( 'grant_type', 'password' );
        return this.http
            .post( this.formatApiUri( 'token/' ),
            body.toString(),
            {
                headers: new HttpHeaders()
                    .set( 'Authorization', 'Basic ' + btoa( `${this.clientId}:${this.clientSecret}` ) )
                    .set( 'Content-Type', 'application/x-www-form-urlencoded' )
            } )
            .map(( data: any ) => {
                console.log( data );
                // login successful if there's a jwt token in the response
                let token = data && data.access_token;
                if ( token ) {
                    // set token property
                    this.token = token;

                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem( 'currentUser', JSON.stringify( { username: username, token: token } ) );

                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }
            } );
    }

    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem( 'currentUser' );
    }
}
