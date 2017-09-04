import { Component } from '@angular/core';
import { WindowRef, BaseService } from './core/index';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent {

    // Variables
    searchString: string = '';
    apiUrl;

    constructor (

        private winRef: WindowRef,
        private baseService: BaseService
    ) {

    }

    onEnter(value: string) {
        this.searchString = value;
        console.log('SEARCH STRING', this.searchString);
        this.callWikiApi()
    }
    
    openRandomArticle() {

        this.winRef.nativeWindow.open('https://en.wikipedia.org/wiki/Special:Random');
    }

    callWikiApi() {

        // build the search query
        this.apiUrl = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${this.searchString}`;

        // search only if there is some query
        if (this.searchString) {
            this.baseService.getApi(this.apiUrl)
                .subscribe(p => console.log('PPPP', p))
        }
    }
}
