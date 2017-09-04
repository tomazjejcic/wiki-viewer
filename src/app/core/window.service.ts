import { Injectable } from '@angular/core';

function provideGlobalWindow(): any {

    // return global native browser window object
    return window;
}

@Injectable()
export class WindowRef {

    get nativeWindow(): any {

        return provideGlobalWindow();
    }
}
