
const add = (a, b) => {

    if ([typeof a, typeof b].some((type) => type !== 'number')) {
        throw Error('inputs must be numbers')
    }

    return a + b;

};

const req = async (url) => {

    const { setTimeout } = await import('timers/promises');

    await setTimeout(300);

    if (url === 'http://error.com') throw Error('network error');

    return Buffer.from('some data');

};

const reqSync = (url, callback) => {

    setTimeout(() => {
        if (url === 'http://error.com') callback(Error('network error'));
        else callback(null, Buffer.from('some data'));
    }, 300);

};

export {
    add,
    req,
    reqSync,
};