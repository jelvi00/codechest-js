import assert from 'assert';
import { strict as assertStrict } from 'assert';
import { setTimeout } from 'timers/promises';

const pseudoReq = async (url, cb) => {
    await setTimeout(300)
    if (url === 'http://error.com') throw Error('network error')
    return Buffer.from('some data')

}

const pseudoReqSync = (url, cb) => {
    setTimeout(() => {
        if (url === 'http://error.com') cb(Error('network error'))
        else cb(null, Buffer.from('some data'))
    }, 300)
}

const add = (a, b) => {

    if (typeof a !== 'number' || typeof b !== 'number') {
        throw Error('inputs must be numbers');
    }

    return a + b;
};


//assertStrict.equal(add(1, 2), 3);
// assert.strict.throws(() => add(1, '2'), Error('inputs must be numbers'));
// assert.strict.doesNotThrow(() => add(1, 2));


// pseudoReqSync(
//     'http://example.com',
//     (err, data) => assert.ifError(err)
// );

// pseudoReqSync(
//     'http://error.com',
//     (err, data) => assert.strict.deepEqual(err, Error('network error'))
// );

assert.doesNotReject(pseudoReq('http://example.com'));
assertStrict.rejects(pseudoReq('http://error.com'), Error('network error'));