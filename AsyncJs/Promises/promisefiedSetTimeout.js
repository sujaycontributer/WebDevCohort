
function setTimeoutPromisefied(ms){
    return new Promise((resolve)=>setTimeout(resolve,ms));
}

// const ps = setTimeoutPromisefied(ms);
function callback(){
    console.log('promisified!');
    
}

// ps.then(callback); 
setTimeoutPromisefied(3000).then(callback);