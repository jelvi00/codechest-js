import { reqSync } from '../src/chest/testing/testing.js';
import { test, expect } from '@jest/globals';

test('handles network errors', (done) => {

    reqSync('http://error.com', (error) => {
        expect(error).toStrictEqual(Error('network error'));
        done();
    });

});

test('responds with data', (done) => {

    reqSync('http://example.com', (error, data) => {
        expect(error == null).toBe(true);
        expect(Buffer.isBuffer(data)).toBeTruthy();
        expect(data).toStrictEqual(Buffer.from('some data'));
        done();
    });

});