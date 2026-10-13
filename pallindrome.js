const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter your str: ", (str) => {
    console.log(str);
//let str = "hello";
let reverse = "";
for(let i=str.length-1;i>=0;i--){
    reverse+=str[i];
}
if(str === reverse){
    console.log("Its a Pallindrome");
}else{
    console.log( "Its not a pallindrome");
}
rl.close();
});