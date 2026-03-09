import { hostname, homedir, tmpdir, platform, type, uptime, freemem, totalmem } from 'node:os';

console.log(totalmem())