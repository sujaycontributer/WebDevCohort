const { log } = require("console");
const fs = require("fs")

// error look like
function print(error,data){

    if(error){
        console.log("error is");
        console.log(error);
    }else{
        console.log(data);
        
    } 
}
//  fs.readFile("a.txt","utf-8",print); // error free
 fs.readFile("aajha.txt","utf-8",print); // if error is exist
 console.log("Done!");