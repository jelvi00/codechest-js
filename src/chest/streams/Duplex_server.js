// Initiate a duplex stream server that listens on port 3000 and responds with 'beat' every second. When data is received, the server should respond with the data in uppercase. The server should stop sending 'beat' when the connection is closed.
import net from 'node:net';



const server = net.createServer((socket) => {

    const interval = setInterval(() => socket.write('beat\n'), 1000)

    socket.on('data', (data) => {
        const message = data.toString().toUpperCase();

        socket.write(message);

        if (message.includes('STOP')) socket.emit('end');
    })

    socket.on('end', () => {
        clearInterval(interval)
        console.log('connection closed')
    })

    socket.on('error', (e) => console.log('VAL1', e))

}).listen(3000)