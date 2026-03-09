import {execFile} from 'node:child_process';
import { promisify } from 'node:util';

const execFilePromise = promisify(execFile);

const controller = new AbortController();

const { signal } = controller;

execFilePromise('node', ['--version'], { signal }).then(({stdout}) => console.log(stdout));

//controller.abort();