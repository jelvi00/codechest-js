import { dirname, join, isAbsolute, relative, resolve, normalize, format, parse, basename, extname } from "node:path";
import { fileURLToPath } from "node:url";

console.log('VAL1 current file', fileURLToPath(import.meta.url));

const __dirname = dirname(fileURLToPath(import.meta.url));

const __filename = fileURLToPath(import.meta.url);

console.log('\nVAL2 __dirname', __dirname);

console.log('\nVAL3 __filename', __filename);

console.log('\nVAL4 __dirname + pizza', join(__dirname, 'pizza1.txt'));

console.log('\nVAL5 is __dirname absolute?', isAbsolute(__filename));

console.log('\nVAL6 relative path (from, to)', relative(__filename, __dirname));

console.log('\nVAL7 creates path (from right to left) until absolute path is reached', resolve('Users', 'chocolate', 'pizza1.txt'));

console.log('\nVAL8 clear extra slashes and resolve dots (.. | .) to paths', normalize('/Users/chocolate/../pizza1.txt'));

console.log('\nVAL9 input should be path.parse result', format(parse(__filename)));

console.log('\nVAL10 convert path to object', parse(__filename));

console.log(`\nVAL11 extract specific values from path, basename: ${basename(__filename)}, extname: ${extname(__filename)}`);
