function findSum(n){
    let ans = 0;
    for(let i = 0; i<n; ++i){
        ans +=i;
    }
    return ans;
}

function findSumtill100(){
    console.log(findSum(100));
}

function syncSleep(){
    let a = 1;
    for(let i=0; i<100000; ++i){
        a++;

    }
}
setTimeout(findSumtill100, 1000)
console.log("Hello World");
//high level of a basic async function

//common async functions - SetTimeout, fs.readFile(to read a system file), Fetch(to read some data from an api endpoint).

const fs = require("fs");
fs.readFile("a.txt", "utf-8", function(err, data){
    console.log(data);
})

