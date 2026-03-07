//Spread Operatörü
let nums = [10, 20, 30, 40];

const add = (a, b, c, d) => console.log(a + b + c + d);

//add(nums[0], nums[1], nums[2], nums[3], nums[4]);    Eski yöntem

//yeni yöntem
add(...nums); //  ...nums -->nums[0], nums[1], nums[2], nums[3], nums[4]

const arr = ["Java", "C#"];
const arr2 = ["C++", "Python", ...arr];

console.log(arr2);

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let [a, b, ...leftovers] = num;

console.log(a, b, leftovers);
