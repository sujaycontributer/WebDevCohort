
// use of async function is that u dont have to write then again again

function setTimeoutPromisefied(ms){
    return new Promise((resolve)=>setTimeout(resolve,ms));
}

async function solve() {
    await setTimeoutPromisefied(3000);
    console.log('task is loading');
    await setTimeoutPromisefied(10000);
    console.log('1st task is done');
    await setTimeoutPromisefied(2000);
    console.log('2nd task is done');   
    
}

solve();