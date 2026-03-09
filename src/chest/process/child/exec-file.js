import {execFile} from 'node:child_process';
import {fileURLToPath} from "node:url";
import {homedir} from "node:os";

const __filename = fileURLToPath(import.meta.url);

const [, , param] = process.argv;

if (param === 'child') {
    console.log(`execFile: Hello from child!`);

} else {

    const binaryPath = homedir() + '/.nvm/versions/node/v18.19.1/bin/node'
    const androidBinaryPath = homedir() + '/Library/Android/sdk/emulator/emulator'

    const callback = (error, stdout, stderr) => {
        if (error) throw error;

        console.log(stdout)
    };


    //const child = execFile('node', ['--version'], callback);
    //const child = execFile(binaryPath, [__filename, 'child'], callback);
    const child = execFile(androidBinaryPath, ['-list-avds'], callback);



}