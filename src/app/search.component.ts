import { Component } from '@angular/core';
import { WindowRef, BaseService } from './core/index';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent {

    // Variables
    searchString: string = '';
    apiUrl;
    apiResult;

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
                .subscribe(data => {
                    console.log('PPPP', data);
                    this.buildListObject(data);
                })
                // TODO: improve error handling
        }
    }

    // manipulate the api result into a more useful object
    buildListObject(data) {

        let listObject = {
            title: undefined,
            listArray: []
        }

        listObject.title = data[0];
        data.shift()
        // console.log('REDUCED ARRAY', data);
        // console.log('LIST OBJECT', listObject);

        for (let i = 0; i < data[0].length; i++) {

            const obj = {
                title: data[0][i],
                description: data[1][i],
                link: data[2][i],
            }

            listObject.listArray.push(obj);
        }

        this.apiResult = listObject;
        // console.log('THE ARRRAYYYY', listObject);
        // console.log('AAPI RESSS ', this.apiResult);
    }
}
