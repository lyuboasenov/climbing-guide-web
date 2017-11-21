import { Region } from '../models/region';
import { Area } from '../models/area';
import { Sector } from '../models/sector';
import { Route } from '../models/route';
import { EnvironmentSpecificService } from './environment-specific.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';


@Injectable()
export class GuideService {
  private baseUri: string;
  private serviceName: string = 'guide_api';

  constructor(private http: HttpClient, private envSpecificSvc: EnvironmentSpecificService) {
    this.baseUri = envSpecificSvc.envSpecific.baseUri;
  }

  getAllRegions(lang = 'en'): Observable<Region[]> {
    return this.http
      .get<Region[]>(this.formatApiUri(lang, 'regions'))
      .catch(this.handleError);
  }

  getAreas(lang = 'en', regionId: number): Observable<Area[]> {
    return this.http
      .get<Area[]>(this.formatApiUriById(lang, 'areas', regionId))
      .catch(this.handleError);
  }

  getSectors(lang = 'en', areaId: number): Observable<Sector[]> {
    return this.http
      .get<Area[]>(this.formatApiUriById(lang, 'sectors', areaId))
      .catch(this.handleError);
  }

  getRoutes(lang = 'en', sectorId: number): Observable<Route[]> {
    return this.http
      .get<Route[]>(this.formatApiUriById(lang, 'routes', sectorId))
      .catch(this.handleError);
  }

  private formatApiUri(lang: string, api: string): string {
    return `${this.baseUri}/${lang}/${this.serviceName}/${api}`;
  }

  private formatApiUriById(lang: string, api: string, id: number): string {
    return `${this.baseUri}/${lang}/${this.serviceName}/${api}/${id}/`;
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
