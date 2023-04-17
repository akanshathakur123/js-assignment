// Check other API functions of an Array and implement those

let items = ["pen", "book", "copy", "car"];
let moreItems = items.unshift("Lemon", "Pineapple");
console.log(moreItems);


let lessItems = items.shift();
console.log(lessItems);


let checkItems = items.includes("copy");
console.log(checkItems);


let fruit = ["mango", "apple"];
let fruits = arr1.concat(items);
console.log(fruits);


let reversedArray = items.reverse();
console.log(reversedArray);


let arrayToString = items.toString();
console.log(arrayToString);


let arrayToSentence = items.join(" ");
console.log(arrayToSentence);


const agesArr = [10, 40, 100, 80];
let isEligible = agesArr.some((age) => age > 18);
console.log(isEligible);


isEligible = agesArr.every((age) => age > 18);
console.log(isEligible);


let indexOfMajor = agesArr.findIndex((age) => age > 18);
console.log(indexOfMajor);
