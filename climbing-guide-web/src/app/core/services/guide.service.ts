import { EnvironmentSpecificService } from './environment-specific.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Region } from '../models/region';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class GuideService {
  public baseUri: string;

  constructor(private http: HttpClient, private envSpecificSvc: EnvironmentSpecificService) {
    this.baseUri = `${envSpecificSvc.envSpecific.baseUri}/guide_api`;
  }

  getAll(): Observable<Region[]> {
    return this.http
      .get<Region[]>(`${this.baseUri}/regions`)
      .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage = '';
        if (err.error instanceof Error) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return Observable.throw(errorMessage);
    }
}
