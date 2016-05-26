import {
    it,
    describe,
    beforeEach,
    expect
} from '@angular/core/testing';

import { MyUppercasePipe } from './my-uppercase.pipe';

describe('MyUppercasePipe', () => {
    let pipe: MyUppercasePipe;

    beforeEach(() => {
        pipe = new MyUppercasePipe();
    });

    it('transforms "abc" to "ABC"', () => {
        expect(pipe.transform('abc')).toEqual('ABC');
    });

    it('transforms null to ""', () => {
        expect(pipe.transform(null)).toEqual('');
    });

    it('transforms undefined to ""', () => {
        expect(pipe.transform(undefined)).toEqual('');
    });

    it('transforms "" to ""', () => {
        expect(pipe.transform('')).toEqual('');
    });
});