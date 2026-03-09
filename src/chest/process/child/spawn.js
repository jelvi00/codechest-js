import { spawnSync, spawn } from 'node:child_process';
import { parse } from 'node:path';
import {fileURLToPath} from "node:url";

const __filename = fileURLToPath(import.meta.url);

const command =  [process.execPath, ['-e', 'console.log("subprocess stdio output")']];
const androidCommand =  [`/Users/jeferreras/Library/Android/sdk/emulator/emulator`, ['-list-avds']];
const errorCommand =  [process.execPath, [ '-e', "throw new Error('subprocess error output')"]];
const nonZeroCommand = [process.execPath, [ '-e', "process.exit(1)"]];
const outErrCommand = [process.execPath, [ '-e', "console.log('A');console.error('B')"]];


// const { stdout, stderr, status } = spawnSync(...command);
//
// console.log(status, stdout.toString());
//
// const spawned = spawn(...nonZeroCommand);
//
// console.log('pid is', spawned.pid)
//
// spawned.stdout.pipe(process.stdout);
//
// spawned.on('close', (status) => console.log('exit status was', status))



// const { IS_CHILD } = process.env;
//
// if (IS_CHILD) {
//     console.log('Subprocess cwd:', process.cwd())
//     console.log('env', process.env)
//
// } else {
//     const { root } = parse(process.cwd());
//     const spawned = spawn(
//        process.execPath,
//         [__filename],
//         { cwd: root, env: {IS_CHILD: '1'} }
//     );
//
//     spawned.stdout.pipe(process.stdout);
//
// }