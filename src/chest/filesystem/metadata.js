import { readdirSync, statSync } from "node:fs";

const files = readdirSync('.');

files.forEach((file) => {
    const stat = statSync(file);
    const typeLabel = stat.isDirectory() ? 'dir: ' : 'file: '
    const { atime, birthtime, ctime, mtime } = stat;

    console.group(typeLabel, file);
    console.log('created:', birthtime);
    console.log('last accessed:', atime);
    console.log('last modified:', mtime);
    console.log('last status change:', ctime);
    console.groupEnd();

});