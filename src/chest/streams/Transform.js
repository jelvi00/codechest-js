import { createUnzip, createGunzip, createGzip } from "node:zlib";
import zlib from "node:zlib";
import { createReadStream, createWriteStream } from "node:fs";
import { pipeline, Transform } from "node:stream";
import { scrypt } from "crypto"

//############################################################################################################


// const unzip = createGunzip(); //createUnzip();
//
// const input = createReadStream('./file.tar.gz');
// const output = createWriteStream('./file.pdf');
//
// pipeline(input, unzip, output, (error) => {
//     console.log('VAL1', error)
// });
// input.pipe(unzip).pipe(output);


//############################################################################################################

// const input = 'hello world';
// zlib.gzip(input, (error, buffer) => {
//
//     zlib.gunzip(
//         buffer,
//         (error, buffer) => console.log('VAL1', buffer.toString())
//     );
// });

//############################################################################################################

// const buffers = [];
// const transform = createGzip();
// const transformUnzip = createGunzip();
//
// transform.write('first\n');
//
// transform.on('finish', () => {
//
//     const input = createReadStream('/Users/Jeferreras/Downloads/file.tar.gz');
//
//     input.pipe(transformUnzip).on('data', (data) => buffers.push(data));
//
//     transformUnzip.on('end', () => console.log(Buffer.concat(buffers).toString(), buffers.length));
//
// });
//
// setTimeout(() => transform.end('second\n'), 500);
//
// transform.pipe(createWriteStream('/Users/Jeferreras/Downloads/file.tar.gz'));

//############################################################################################################

const createTransformStream = () => new Transform({
    decodeStrings: false,
    encoding: 'hex',
    transform(chunk, encoding, callback) {
        scrypt(chunk, 'a-salt', 32, (error, key) => {
            if (error) {
                callback(error);
            } else {
                callback(null, key);
            }
        });
    }
});

const transform = createTransformStream();

transform.on('data', (data) => console.log('VAL1', data));

transform.write('A\n')
transform.write('B\n')
transform.write('C\n')
transform.end('nothing more to write')