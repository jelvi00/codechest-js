
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from "node:path";
import {fileURLToPath} from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const __filename = fileURLToPath(import.meta.url);

const contents = readFileSync(join(__filename), { encoding: 'utf8'});

writeFileSync(join(__dirname, 'uppercased.txt'), contents.toUpperCase());




