import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
// import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class BaseService {

    constructor (

        private http: Http
    ) {

    }

    getApi(apiUrl): Observable<any> {
        console.log('api URL: ', apiUrl);
        let result$ = this.http
            .get(`${apiUrl}`, {headers: this.getHeaders()})
            .map(res => res.json())
            .catch(res => Observable.throw(res))
            return result$
    }

    private getHeaders() {
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        return headers;
    }
}
