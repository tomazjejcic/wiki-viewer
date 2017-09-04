import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
// import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class BaseService {

    apiUrl: string = 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1';
    apiUrl1: string = 'https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=json';

    constructor (

        private http: Http
    ) {

    }

    getApi(): Observable<any> {
        let result$ = this.http
            .get(`${this.apiUrl}`, {headers: this.getHeaders()})
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
