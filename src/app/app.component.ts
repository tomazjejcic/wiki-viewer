import { Component } from '@angular/core';
import { WindowRef, BaseService } from './core/index';

declare var window: any

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';

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
