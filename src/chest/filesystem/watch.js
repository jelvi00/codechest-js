import { join, resolve } from 'node:path';
import { watch, readdirSync, statSync } from "node:fs";

//const cwd = process.cwd()
const cwd = resolve('.');

const files = new Set(readdirSync('.'));

const eventDetected = (eventType, filename) => {

    try {
        const { ctimeMs, mtimeMs } = statSync(join(cwd, filename));

        if (files.has(filename)) {
            eventType = ctimeMs === mtimeMs ? 'content-updated' : 'status-updated';
            //console.log(`File modified: ${filename}`);
        } else {
            eventType = 'created';
            files.add(filename);
            //console.log(`File created: ${filename}`);
        }

    } catch (err) {
        if (err.code === 'ENOENT') {
            eventType = 'deleted';
            files.delete(filename);
            //console.log(`File deleted: ${filename}`);
        } else {
            console.error(err);
        }

    } finally {
        console.log(eventType, filename);
    }

};

watch('.', eventDetected);