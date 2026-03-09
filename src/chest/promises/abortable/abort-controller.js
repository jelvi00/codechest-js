const ac = new AbortController();

const signal = ac.signal;
const timeoutSignal = AbortSignal.timeout(5000);


//FLOW  #1
const abortEventListener = (event) => {
  console.log('VAL1 aborted', signal.aborted);
  console.log('VAL1 aborted', signal.reason);
}

signal.addEventListener("abort", abortEventListener);
//signal.removeEventListener("abort", abortEventListener);


//FLOW #2
fetch('https://catfact.ninja/fact', { signal: AbortSignal.any([ signal, timeoutSignal, /* AbortSignal.abort() */ ]) })
.then(c => c.json())
.then(console.log)
.catch(e => console.log('VAL1', e.name))



ac.abort();