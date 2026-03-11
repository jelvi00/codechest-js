import net from "node:net";
import { pipeline, Transform, PassThrough } from "node:stream";
import { createWriteStream } from "node:fs";

const server = net.createServer((socket) => {

    const interval = setInterval(() => socket.write('beat\n'), 1000)

    const writable = createWriteStream('./out.txt');

    const transform = new Transform({
        transform(chunk, encoding, next) {
            next(null, chunk.toString().toUpperCase())
        }
    });

    //socket.pipe(process.stdout);

    //socket.pipe(writable);

    pipeline(
        socket,
        transform, //new PassThrough()
        writable,
        (error) => error && console.log('VAL1', error)
    );

    socket.on('end', () => {
        clearInterval(interval)
        console.log('connection closed')
        writable.end();
    })

    socket.on('error', (e) => console.log('VAL1', e))

}).listen(3000)
