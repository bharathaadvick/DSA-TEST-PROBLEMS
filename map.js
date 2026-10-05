let str1 = "listen";
let str2 = "silent";
function isAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    let frequency = {};
    for (let i = 0; i < str1.length; i++) {
        let char = str1[i];

        if (frequency[char]) {
            frequency[char]++;
        } else {
            frequency[char] = 1;
        }
    }
    for (let i = 0; i < str2.length; i++) {
        let char = str2[i];
        if (!frequency[char]) {
            return false;
        }
        frequency[char]--;
    }
    return true;
}
console.log(isAnagram(str1, str2));