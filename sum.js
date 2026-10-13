let nums = [2, 7, 11, 15];
let target = 9;
let map = new Map();
for (let i = 0; i < nums.length; i++) {
    let needed = target - nums[i];
    if (map.has(needed)) {
        console.log([map.get(needed), i]);
        break;
    }
    map.set(nums[i], i);
}