import { readdirSync, readdir } from 'node:fs';
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
const { readdir: readdirProm } = await import('node:fs/promises');

const __dirname = dirname(fileURLToPath(import.meta.url));

try {
    const files = readdirSync(__dirname);
    console.log('sync', files);
} catch (err) {
    console.error(err);
}

readdir(__dirname, (err, files) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('callback', files);
});

readdirProm(__dirname)
    .then(files => console.log('promise', files))
    .catch(console.error);