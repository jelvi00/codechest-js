const getCatFact = async ({ signal } = {}) => {

	let response;

	const abortEventListener = () => throw new Error(signal.reason);

	if (signal?.aborted) abortEventListener();

  	if (signal) signal.addEventListener("abort", abortEventListener, { once: true })

  	try {
  		response = await fetch('https://catfact.ninja/fact').then(c => c.json());

  		if (signal?.aborted) abortEventListener();
    

  	} finally {
    	if (signal) signal.removeEventListener("abort", abortEventListener);

  	}


  	return response;

}

const ac = new AbortController();


getCatFact({ signal: ac.signal, /* AbortSignal.abort() */}).then(console.log);


ac.abort()
