import { environment } from '../../../environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

export class BaseService {
    protected baseUri: string;
    protected serviceName: string;

    constructor(protected http: HttpClient) {
        this.baseUri = environment.apiBaseUri;
    }

    protected formatApiUri( api: string ): string {
        return `${this.baseUri}/${this.serviceName}/${api}`;
    }

    protected formatApiUriById( api: string, id: number ): string {
        return `${this.baseUri}/${this.serviceName}/${api}/${id}/`;
    }
    
    protected formatMultiLingualApiUri( lang: string, api: string ): string {
        return `${this.baseUri}/${lang}/${this.serviceName}/${api}`;
    }

    protected formatMultiLingualApiUriById( lang: string, api: string, id: number ): string {
        return `${this.baseUri}/${lang}/${this.serviceName}/${api}/${id}/`;
    }

    protected handleError( err: HttpErrorResponse ) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage = '';
        if ( err.error instanceof Error ) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error( errorMessage );
        return Observable.throw( errorMessage );
    }
}
