import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
// import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class BaseService {

    constructor (

        private http: Http
    ) {

    }

    getApi(apiUrl): Observable<any> {
        console.log('api URL: ', apiUrl);
        let result$ = this.http
            .get(apiUrl, {headers: this.getHeaders()})
            .map(res => res.json())
            .catch(this.handleError)
            return result$
    }

    private getHeaders() {
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        return headers;
    }

    handleError (error: any) {
        // log error
        let errorMsg = error.message || `Yikes! There was a problem with our hyperdrive device and we couldn't get data`
        console.error(errorMsg);
      
        // throw an application level error
        return Observable.throw(errorMsg);
      }
}
