import { constants, open } from "node:fs";
import {fileURLToPath} from "node:url";


const oFlags = {
    a: `opens file for appending | create file if it does not exist | fs.constants: ${constants.O_APPEND} + ${constants.O_CREAT}`,
    ax: `opens file for appending | fails if path exists | fs.constants: ${constants.O_APPEND} + ${constants.O_CREAT} | ${constants.O_EXCL}`,
    'a+': `opens file for reading and appending | create file if it does not exist | fs.constant: ${constants.O_APPEND} + ${constants.O_CREAT} | fs.flag: O_RDWR????`,
    'ax+': `opens file for reading and appending | fails if path exists | fs.constant: ${constants.O_APPEND} + ${constants.O_CREAT} | ${constants.O_EXCL} | fs.flag: O_RDWR????`,
    as: `opens file for appending in synchronous mode | create file if it does not exit | fs.constant: ${constants.O_APPEND} + ${constants.O_CREAT} | ${constants.O_SYNC}`,
    'as+': `opens file for reading and appending in synchronous mode | create file if it does not exist | fs.constant: ${constants.O_APPEND} | ${constants.O_SYNC} + ' | fs.flag: O_RDWR????`,
    r: 'opens file for reading | fails if file does not exist | fs.constant: ' + constants.O_RDONLY,
    rs: `'opens file for reading in synchronous mode | fails if file does not exist | fs.constant: ${constants.O_RDONLY} | ${constants.O_SYNC}`,
    'r+': 'opens file for reading and writing | fails if file does not exist | fs.constant: ' + constants.O_RDWR,
    'rs+': `opens file for reading and writing in synchronous mode | fails if path does not exist. (performance risky) | fs.constant: ${constants.O_RDWR} | ${constants.O_SYNC}`,
    w: `opens file for writing | creates file if does not exist | truncates file if does exist | fs.constant: ${constants.O_WRONLY} | ${constants.O_CREAT} | ${constants.O_TRUNC}`,
    wx: `opens file for writing | fails if path exists | fs.constant: ${constants.O_WRONLY} | ${constants.O_CREAT} | ${constants.O_EXCL}`,
    'w+': `opens file for reading and writing | creates file if does not exist | truncates file if does exist | fs.constant: ${constants.O_RDWR} | ${constants.O_CREAT} | ${constants.O_TRUNC}`,
    'wx+': `opens file for reading and writing | fail if path exists | fs.constant: ${constants.O_RDWR} | ${constants.O_CREAT} | ${constants.O_EXCL}`
}

open(fileURLToPath(import.meta.url), constants.O_APPEND | constants.O_CREAT, (err, fd) => {
    if (err) {
        console.error(err)
        return
    }
    console.log('file descriptor', fd)
});



