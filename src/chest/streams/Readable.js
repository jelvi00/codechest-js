import { Readable } from 'node:stream'

const createReadStream = (data) => {

    return new Readable({
        objectMode: false,
        encoding: 'hex',
        read () {
            if (data.length === 0) this.push(null)
            else this.push(data.shift());
        }
    });


};

//const readable = createReadStream(['someeeeee', 'data', 'to', 'read'])
//readable.on('data', (data) => { console.log('got data', Buffer.from(data, 'hex').toString()) });

const readable = Readable.from(['some', 'data', 'to', 'read']);
readable.on('data', (data) => { console.log('got data', data) });
readable.on('end', () => { console.log('finished reading') });