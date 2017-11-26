import { Region } from '../models/region';
import { Area } from '../models/area';
import { Sector } from '../models/sector';
import { Route } from '../models/route';
import { EnvironmentSpecificService } from './environment-specific.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BaseService } from './base.service';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class GuideService extends BaseService {

    constructor( http: HttpClient, envSpecificSvc: EnvironmentSpecificService ) {
        super( http, envSpecificSvc );
        this.serviceName = 'guide_api';
    }

    getAllRegions( lang = 'en' ): Observable<Region[]> {
        return this.http
            .get<Region[]>( this.formatMultiLingualApiUri( lang, 'regions' ) )
            .catch( this.handleError );
    }

    getAreas( lang = 'en', regionId: number ): Observable<Area[]> {
        return this.http
            .get<Area[]>( this.formatMultiLingualApiUriById( lang, 'areas', regionId ) )
            .catch( this.handleError );
    }

    getSectors( lang = 'en', areaId: number ): Observable<Sector[]> {
        return this.http
            .get<Area[]>( this.formatMultiLingualApiUriById( lang, 'sectors', areaId ) )
            .catch( this.handleError );
    }

    getRoutes( lang = 'en', sectorId: number ): Observable<Route[]> {
        return this.http
            .get<Route[]>( this.formatMultiLingualApiUriById( lang, 'routes', sectorId ) )
            .catch( this.handleError );
    }
}
