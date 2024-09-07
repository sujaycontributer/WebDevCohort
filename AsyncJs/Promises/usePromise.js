// How to use promise
function doAsyncOp(resolve){
    setTimeout(resolve,3000);
}

const ps = new Promise (doAsyncOp);
function callback(){
    console.log('task is resolved');
    
}

ps.then(callback);
