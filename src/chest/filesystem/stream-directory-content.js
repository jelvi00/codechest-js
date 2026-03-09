import { createServer } from 'node:http';
import { Readable, Transform, pipeline } from 'node:stream';
import { opendir } from 'node:fs/promises';
import {dirname} from "node:path";
import {fileURLToPath} from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const createEntryStream = () => {
    let syntax = '[\n'
    return new Transform({
        writableObjectMode: true,
        readableObjectMode: false,
        transform (entry, enc, next) {
            next(null, `${syntax} "${entry.name}"`);
            syntax = ',\n';
        },
        final (cb) {
            this.push('\n]\n');
            cb();
        }
    })
}

createServer((req, res) => {

    if (req.url !== '/') {
        res.writeHead(404, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({message: 'Not Found'}));
        return;
    }

    opendir(__dirname)
        .then((dir) => {

            const entryStream = createEntryStream();

            res.writeHead(200, {'Content-Type': 'application/json'});
            pipeline(
                Readable.from(dir),
                entryStream,
                res,
                (err) => err && console.error(err)
            );

        })
        .catch((err) => {
            res.writeHead(500, {'Content-Type': 'application/json'});
            res.end(JSON.stringify({message: err.message}));
        });

}).listen(3000, () => console.log('server running on port 3000'));