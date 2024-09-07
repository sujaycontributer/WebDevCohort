const fs = require('fs');

function callback(){
    console.log("promise is proceced");
}
function readTheFile(sendTheFile){
    fs.readFile("a.txt",'utf-8',(err,data)=>{

        sendTheFile(data);
    })
}
function readFile(filename){
    // read the file here and return its value
    return new Promise(readTheFile);
}
const p =  await readFile();


const ps = readFile();
ps.then(callback);