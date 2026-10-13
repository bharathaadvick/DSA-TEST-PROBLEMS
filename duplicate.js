const readline = require("readline");
//let arr = [1, 2, 3, 2, 4, 5, 3];
let seen = new Set();
let duplicates = new Set();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter array: ", (arr) => {
arr = arr.split(",").map(Number);
for (let i = 0; i < arr.length; i++) {
    if (seen.has(arr[i])) {
        duplicates.add(arr[i]);
    } else {
        seen.add(arr[i]);
    }
}
console.log([...duplicates]);
rl.close();
});
