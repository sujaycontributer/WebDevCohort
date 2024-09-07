const fs = require("fs")

function print(error,data){
    console.log(data);
    
}
 fs.readFile("a.txt","utf-8",print);
 fs.readFile("b.txt","utf-8",print);
 console.log("Done!");
 

// what is "readfiele" look like
// function readFile(path,encoding,op){
//     // read file
//     op("error",data of you given in path);
// }

