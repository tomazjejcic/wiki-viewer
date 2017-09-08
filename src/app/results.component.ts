import { Component, Input } from '@angular/core';
import { WindowRef } from './core/index';

@Component({
    selector: 'app-results',
    templateUrl: './results.component.html',
    styleUrls: ['./results.component.scss']
})
export class ResultsComponent {

    // @Input
    @Input() receivedApiData
        
    constructor (
        private winRef: WindowRef
    ) {

    }

    openWiki(link) {
        this.winRef.nativeWindow.open(link);
    }

}
