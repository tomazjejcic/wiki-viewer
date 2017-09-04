import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { WindowRef } from './core/index';
import { BaseService } from './core/index';

import { AppComponent } from './app.component';
import { SearchComponent } from './search.component';
import { ResultsComponent } from './results.component';

@NgModule({
    declarations: [
        AppComponent,
        SearchComponent,
        ResultsComponent
    ],
    imports: [
        BrowserModule,
        HttpModule
    ],
    providers: [ 
      WindowRef,
      BaseService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
