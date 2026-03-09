import { Transform } from "node:stream";

console.log('VAL1', process.argv[2])

// process.stdin.on('data', (data) => {
//     console.log('VAL2', data.toString())
//     process.exit()
// })
process.stdin.pipe(process.stdout)
const createUppercaseStream = () => {

    return new Transform({
        transform(chunk, encoding, next) {
            // const uppercased = chunk.toString().toUpperCase()
            // next(null, uppercased)
            this.push(chunk.toString().toUpperCase())
            next()
        }
    });
}

const uppercase = createUppercaseStream();
process.stdin.pipe(uppercase).pipe(process.stdout)

//console.log(process.stdin.isTTY ? 'terminal' : 'piped to')


//to redirect STDERR use 2> instead of > in command line | references file descriptors (fd) 0=stdin, 1=stdout, 2=stderr
// process.stderr.write((process.stdin.isTTY ? 'terminal' : 'piped to') + '\n');
// console.error(process.stdin.isTTY ? 'terminal' : 'piped to')

