import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-results',
    templateUrl: './results.component.html',
    styleUrls: ['./results.component.scss']
})
export class ResultsComponent {

    // @Input
    @Input() receivedApiData
        
    constructor (

    ) {

    }

}
