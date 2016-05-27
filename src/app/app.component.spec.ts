import {
    it,
    inject,
    describe,
    beforeEachProviders,
    expect
} from '@angular/core/testing';

import { AppComponent } from './app.component';

describe('App', () => {
    beforeEachProviders(() => [
        AppComponent
    ]);

    it('should have default title', inject([AppComponent], (app: AppComponent) => {
        expect(app.title).toBe('App Component');
    }));
});