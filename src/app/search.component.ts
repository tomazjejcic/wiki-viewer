import { Component } from '@angular/core';
import { WindowRef, BaseService } from './core/index';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent {


    constructor (

        private winRef: WindowRef,
        private baseService: BaseService
    ) {

    }
    
    openRandomArticle() {

        this.winRef.nativeWindow.open('https://en.wikipedia.org/wiki/Special:Random');
    }

    callWikiApi() {
      this.baseService.getApi()
        .subscribe(p => console.log('PPPP', p[0].title))
    }
}
