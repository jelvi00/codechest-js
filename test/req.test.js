import { test } from 'tap';
import { req } from '../src/chest/testing/testing.js';


test('handles network errors', async ({ rejects }) => {
    await rejects(req('http://error.com'), Error('network error'));
});

test('responds with data', async ({ ok, strictSame }) => {

    const data = await req('http://example.com');
    ok(Buffer.isBuffer(data));
    strictSame(data, Buffer.from('some data'));

});