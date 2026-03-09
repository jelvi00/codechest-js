// console.log('VAL1', process.cwd());
// console.log('VAL2', process.platform);
// console.log('VAL3', process.pid);
// console.log('VAL3', process.env);
// console.log('VAL4', process.uptime())
//
// const { user, system } = process.cpuUsage();
//
// console.log('VAL5, represents time (microseconds) that the Node process spent using the CPU', user);
// console.log('VAL6, represents time (microseconds) that the kernel spent using the CPU due to activity triggered by the process', system);
//
// const outputStats = () => {
//     const uptime = process.uptime()
//     const { user, system } = process.cpuUsage()
//     console.log(uptime, user, system, (user + system)/1000000)
// }
//
// outputStats()
//
// setTimeout(() => {
//     outputStats()
//     const now = Date.now()
//     // make the CPU do some work:
//     while (Date.now() - now < 5000) {}
//     outputStats()
// }, 500)



console.table([process.memoryUsage()])

