
function setTimeoutPromisefied(ms){
    return new Promise((resolve)=>setTimeout(resolve,ms));
}

// const ps = setTimeoutPromisefied(ms);

setTimeoutPromisefied(1000)
.then(function(){
    console.log('hi');
    // instead of calling again function
    return setTimeoutPromisefied(2000);
    
})
.then(function(){
    console.log('hello');                 // cleaner code for callback [Promisified callback]
    return setTimeoutPromisefied(3000);
    
})
.then(function(){
    console.log('bye');
    
})
