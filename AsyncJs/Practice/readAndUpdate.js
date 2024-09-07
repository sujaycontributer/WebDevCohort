
const fs = require('fs');

function asyncFn(resolve){
    fs.readFile('a.txt','utf-8',(err,data)=>{
        if(err){
            console.log(err); 
        }
        // data = "hello world my name is raman";
        const data1 = data.toString().split(" ");
        let s = "";
        for(let i = 0; i<data1.length;i++){
            s+=data1[i];
            s+=" ";
        }
        fs.writeFile('a.txt',s,'utf-8',(err)=>{
            if(err) {
                resolve("Some err find out there");
            }
            resolve(s);
        
        });
    });

}

function readTheFile(){
    return new Promise(asyncFn);
}

function updatedFile(s){
    console.log(s);
}

const ps = readTheFile('a.txt');
ps.then(updatedFile);

// ps.then(updatedFile);
// fs.readFile('a.txt','utf-8',(err,data)=>{
//     data = data.toString().to;
//     console.log(data);
// })

