import {
    it,
    inject,
    describe,
    beforeEachProviders,
    expect
} from '@angular/core/testing';

import{ AboutComponent } from './about.component';

describe('About', () => {
    beforeEachProviders(() => [
        AboutComponent
    ]);

    it('should have default title', inject([AboutComponent], (about: AboutComponent)=> {
        expect(about.title).toBe('About Component');
    }));
});