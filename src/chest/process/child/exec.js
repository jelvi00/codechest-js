import { execSync, exec } from 'node:child_process';

const command =  `${process.execPath} -e "console.log('subprocess stdio output')"`;
const androidCommand =  `emulator -list-avds`;
const errorCommand =  `${process.execPath} -e "throw new Error('subprocess error output')"`;
const nonZeroCommand = `${process.execPath} -e "process.exit(1)"`;
const outErrCommand = `"${process.execPath}" -e "console.log('A');console.error('B')"`;

// try {
//
//     const output = execSync(errorCommand);
//
//     //console.log(output.toString());
//
// } catch (err) {
//     console.error(err);
//
// }


exec(errorCommand, (err, stdout, stderr) => {
    console.log('err', err);
    console.log('subprocess stdout: ', stdout.toString());
    console.log('subprocess stderr: ', stderr.toString());
});