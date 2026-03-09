import net from 'node:net';

// import { finished } from 'node:stream';
//
// net.createServer((socket) => {
//     const interval = setInterval(() => {
//         socket.write('beat')
//     }, 1000)
//     socket.on('data', (data) => {
//         socket.write(data.toString().toUpperCase())
//     })
//     finished(socket, (err) => {
//         if (err) {
//             console.error('there was a socket error', err)
//         }
//         console.error('connection closed')
//         clearInterval(interval)
//     })
// }).listen(3000)


import { finished } from 'node:stream/promises';


net.createServer((socket) => {
    const interval = setInterval(() => {
        socket.write('beat')
    }, 1000)
    socket.on('data', (data) => {
        socket.write(data.toString().toUpperCase())
    })
    finished(socket).then(() => {
        console.log('connection closed');
        clearInterval(interval);
    })
}).listen(3000)
