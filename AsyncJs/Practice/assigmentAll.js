
// function asyncOp(resolve){
//     setTimeout(resolve,ms);
// }

function promisified(ms){
    return new Promise((resolve)=>setTimeout(resolve,ms));
}

function callback(){
    console.log('task done!');
    
}

promisified(2000).then(callback);