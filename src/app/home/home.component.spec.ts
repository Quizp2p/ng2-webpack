import{
    it,
    inject,
    describe,
    beforeEachProviders,
    expect
} from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('About', () => {
    beforeEachProviders(() => [
        HomeComponent
    ]);

    it('should have default title', inject([HomeComponent], (home: HomeComponent)=> {
        expect(home.title).toEqual('Home Component');
    }));
});