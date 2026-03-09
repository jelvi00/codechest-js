import { test } from 'tap';
import { reqSync } from '../src/chest/testing/testing.js';

test('handles network errors', ({ strictSame, end }) => {

    reqSync('http://error.com', (err, data) => {
        strictSame(err, Error('network error'));
        end();
    });

});

test('responds with data', ({ ok, strictSame, error, end }) => {

    reqSync('http://example.com', (err, data) => {
        error(err);
        ok(Buffer.isBuffer(data));
        strictSame(data, Buffer.from('some data'));
        end();
    });

});