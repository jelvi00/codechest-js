// setInterval(() => {
//     console.log('this interval is keeping the process open')
//     process.exitCode = 2
// }, 500)
setTimeout(() => {
    console.log('exit after this')
    //process.exit()
    process.exit(1)
}, 1750)
//*nix shells echo $? to get the exit code of the last command
// echo %ErrorLevel% in Windows
// $LastExitCode in PowerShell

process.on('exit', (code) => {
    console.log('exit event with code:', code)
});