
function setTimeoutPromisefied(ms){
    return new Promise((resolve)=>setTimeout(resolve,3000));
}

// const ps = setTimeoutPromisefied(ms);
function callback(){
    console.log('promisified!');
    
}

async function cleanCode() {
    await setTimeoutPromisefied(1000);
    console.log('1st task is done');
    await setTimeoutPromisefied(2000);
    console.log('2nd task is done');
    await setTimeoutPromisefied(3000);
    console.log('3 task is done!');
 
}

cleanCode();

console.log('this will print 1st'); // please run it
