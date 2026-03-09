import {fork} from 'node:child_process';
import {fileURLToPath} from "node:url";
import {dirname} from "node:path";

const [, , param] = process.argv;

const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(fileURLToPath(import.meta.url));

console.log('PARENT', process.ppid);
console.log('CURRENT', process.pid);

// if (param === 'child') {
//     setTimeout(() => {
//         console.log(`Hello from ${param}!`);
//     }, 1_000);
// } else {
//
//     const controller = new AbortController();
//     const {signal} = controller;
//     const child = fork(__filename, ['child'], {signal});
//
//     child.on('error', (err) => console.error('child error:', err));
//
//     //child.kill('SIGINT');
//
//     //controller.abort();
//
// }


const child = fork(__dirname + '/fork_sub.js');

child.on('message', (msg) => {
    console.log('PARENT got message:', msg?.content);
    child.kill('SIGINT');
});

child.send({ content: 'Hello from parent!' });

