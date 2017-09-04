import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { WindowRef } from './core/index';
import { BaseService } from './core/index';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
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
