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
        expect(pipe.transform('abc')).toBe('ABC');
    });

    it('transforms null to ""', () => {
        expect(pipe.transform(null)).toBe('');
    });

    it('transforms undefined to ""', () => {
        expect(pipe.transform(undefined)).toBe('');
    });

    it('transforms "" to ""', () => {
        expect(pipe.transform('')).toBe('');
    });
});