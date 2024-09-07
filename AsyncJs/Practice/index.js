// const fs = require('fs');
// fs.readFile('a.txt','utf-8',(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     let str = data.toString().split("     ");
//     console.log(str);
    
// })


 // time printing in every second interval

    // setInterval(()=>{
    //     let date = new Date();
    //     console.log(date.toLocaleTimeString());
    // },1000);


// counter-1 printing

// let cnt = 1;
// setInterval(()=>{ // hrere i using setinterval async method
//     console.log(cnt++);
    
// },1000); 

// without using setinterval below counter-2

let cnt = 1;

function timeout(cnt){
    setTimeout(()=>{
        console.log(cnt++);
        timeout(cnt);
        
    },1000);
}
timeout(cnt);
