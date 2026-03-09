
import { spawn } from 'child_process';

const sp = spawn(
    process.execPath,
    [
        '-e',
        `console.error('err output'); process.stdin.pipe(process.stdout)`
    ],
    {
        stdio: [
            'pipe',
            'inherit',//'pipe',
            'ignore'//process.stdout //'pipe'
        ]
    }
)

//sp.stderr.pipe(process.stdout)
//sp.stdout.pipe(process.stdout)
sp.stdin.write('this input will become output\n')
sp.stdin.end()