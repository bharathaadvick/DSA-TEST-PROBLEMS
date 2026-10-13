let arr = [1, 2, 3, 5, 6];
let n = 6;
let expected = n * (n + 1) / 2;
let actual = 0;
for (let i = 0; i < arr.length; i++) {
    actual += arr[i];
}
let missing = expected - actual;
console.log(missing);

