const fs = require('fs');  // fs is an object

const data = fs.readFile("a.txt","utf-8");  // reading file asynchronusly
console.log(data);
const data2 = fs.readFileSync("b.txt","utf-8"); // reading file synchronously
console.log(data2);
