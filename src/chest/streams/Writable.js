// import fs from 'fs';
// const writable = fs.createWriteStream('./out.txt')
// writable.on('finish', () => { console.log('finished writing') })
// writable.write('A\n')
// writable.write('B\n')
// writable.write('C\n')
// writable.end('nothing more to write')

import { Writable } from 'node:stream';

const createWriteStream = (data) => {
    return new Writable({
        write (chunk, enc, next) {
            data.push(chunk)
            next()
        }
    })
}

const data = []
const writable = createWriteStream(data)

writable.on('finish', () => { console.log('finished writing', data) })
writable.write('A\n')
writable.write('B\n')
writable.write('C\n')
writable.end('nothing more to write')