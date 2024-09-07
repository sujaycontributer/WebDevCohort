
const ps = new Promise((resolve)=>{

    setTimeout(()=>{
        console.log('3rd task is done');
        
    },3000);
    console.log('1st task is done');
    resolve('Hi there');
    
});

function callback(stringVar){
    console.log(stringVar);
    console.log('2rd task is done');
}

ps.then(callback);