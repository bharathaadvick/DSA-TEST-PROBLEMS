let arr = [3, 0, 1];
let n = arr.length;
let expectedSum = (n * (n + 1)) / 2;
let actualSum = 0;
for (let i = 0; i < arr.length; i++) {
    actualSum += arr[i];
}
let missing = expectedSum - actualSum;
console.log("Missing number:", missing);