function main(randomfuntion){


    // randomfuntion = function(){
    //     setTimeout(() => {  
    //         console.log("i am done"); 
    //     }, 3000);
    // }
    setTimeout(randomfuntion,3000);


}
async function callback(){
    console.log("i resolved it");
    
}

const ps = new Promise(main);
ps.then(callback)
