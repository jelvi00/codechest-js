
process.on('message', (msg) => {
    console.log('CHILD got message:', msg?.content);
    process.send({ content: 'Hello from child!' });
});
