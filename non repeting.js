let str = "aabbccddee";
let map = new Map();
for (let char of str) {
    if (map.has(char)) {
        map.set(char, map.get(char) + 1);
    } else {
        map.set(char, 1);
    }
}
let result = -1;
for (let char of str) {
    if (map.get(char) === 1) {
        result = char;
        break;
    }
}
console.log(result);













