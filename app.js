//  const num = [];
// for (let i = 0; i <= 20; i++) {
//   //
//   if (i === 0) {
//     continue;
//   }
//   if (i % 2 === 0) {
//     console.log(i);
//   }

// }

// for (let i = 20; i >= 0; i--) {
//   if (i === 0) {
//     continue;
//   }
//   console.log(i);
//   console.log("\n");
// }

// let star = "";
// for (let i = 1; i <= 5; i++) {
//   for (let j = 0; j < i; j++) {
//     star += "*";
//   }
//   star += "\n";
// }
// console.log(star);

// for (let i = 0; i < 6; i++) {
//   console.log(" * ".repeat(i));
// }
// for (let j = 5; j > 0; j--) {
//   console.log(" * ".repeat(j));
// }

// let star = "";
// for (let i = 1; i <= 5; i++) {
//   for (let j = 5; j > i - 1; j--) {
//     star += "*";
//   }
//   star += "\n";
// }
// console.log(star);

// * 0< 1
// **
// ***
// ****
// *****

// const arr = [];
// for (let i = 1; i <= 20; i++) {
//   arr.push(i);
// }

// const newArr = arr.map((num, idx, array) => {
//   return num % 2 === 0;
// });
// console.log(newArr);
// return boolean values
//  const yetNewArr = [];

// arr.map((num) => {
//   if (num % 2 === 0) {
//     yetNewArr.push(num);
//   }
// });
// console.log(yetNewArr);

// // map return new array
// // if we save on const  it will iterate on old array kar ke new array rerurn kar tha
// that why return undefined

// const newArr = [];
// for (let i = 0; i <= 20; i++) {
//   arr.push(i);
// }

// const yetNewArr = arr.filter((num) => {
//   if (num % 2 === 0 && num !== 0) {
//     return num;
//   }
// });

// console.log(yetNewArr);

// const newArr = [];
// for (let i = 1; i <= 10; i++) {
//   newArr.push(i);
// }
// // console.log(newArr);
// newArr.map((num) => {
//   console.log(num * 2);
// });
// const table = [];
// for (let i = 1; i <= 10; i++) {
//   table.push(i);
// }
// console.log(newArr);
// const table2 = (num) => {
//   for (let i = 0; i < num * 1; i++) {}
// };
// table2(5);

// const arr = [4, 5, 39, 1];
// const newArr = arr.sort((a, b) => a - b);
// console.log(arr);
// console.log(newArr);

// const arr = [];
// for (let i = 0; i <= 20; i++) {
//   arr.push(i);
// }
// const table = (num) => {
//   for (let i = 0; i <= 10; i++) {
//     let multiply = num * i;
//     console.log(multiply);
//   }
// };
// table(4);

// const table2 = arr.forEach((num) => {
//   let i = 1;
//   let multiply = num * i;
//   console.log(multiply);
// });
// table2();

// function table2(num) {
//   arr.forEach((num2) => {
//     let multiply = num * num2;
//     console.log(multiply);
//   });
// }
// table2(5);

// function table3(num) {
//   const funcWithMap = arr.map((num3, idx) => {
//     idx = num * num3;
//     console.log(idx);
//   });
//   //   console.log(funcWithMap);
// }
// table3(5);

// function table(num) {
//   const resArr = new Array(1, 2, 3, 4, 5, 6, 7, 9, 10).map((el) => el * num);
//   console.log(resArr);
// }
// table(5);

// const newArr = new Array(10);
// console.log(newArr);
// const newArr2 = Array.from(Array(10).keys());
// console.log(newArr2);
// const newArr3 = [...Array(10)];
// console.log(newArr3);
// console.log(Array.from([1, 2, 3], (x) => x + x));
// const newArr4 = Array.from({ length: 5 }).

// function table(num) {
//   const resArr = Array.from(Array({ length: 10 })).map((el) => el * num);
//   console.log(resArr);
// }
// table(5);

// function table(num) {
//   const resArr = Array.from(Array(10)).map((el) => el * num);
//   console.log(resArr);
// }
// table(5);

// function table(num) {
//   const resArr = Array.from({ length: 10 }, (v, i) => i).map((el) => el * num);
//   console.log(resArr);
// }
// table(5);

// function table(num) {
//   const resArr = Array.from({ length: 10 }, (v, i) => ).map((el) => el * num);
//   console.log(resArr);
// }
// table(5);

// function table(num) {
//   const resArr = Array.from(Array(10).keys()).map((el) => el * num);
//   console.log(resArr);
// }
// table(5);
// function table(num) {
//   const resArr = Array(10)
//     .fill()
//     // .map((nums, index) => index + 1)
//     .map((el, idx) => ++idx * num);
//   console.log(resArr);
// }
// table(5);
// function table(num) {
//   const resArr = Array(10)
//     .fill(num)
//     // .map((num, index) => index + 1)
//     .map((el, idx) =>  * num);
//   console.log(resArr);
// }
// table(5);

// const table = (num) =>
//   Array(10)
//     .fill(num)
//     .map((el, idx) => ++idx * el);
// console.log(table(5));

// // 1 to 10 sum

// const arr = (num) =>
//   Array(10)
//     .fill(num)
//     .map((el, idx) => idx + num);
// console.log(arr(1, 10));

// const arr = (num, sum) =>
//   Array(10)
//     .fill(num)
//     .forEach((el, idx) => (idx = el + num));
// console.log(arr(1));

// const sum = () =>
//   Array(10)
//     .fill()
//     .reduce((perVal, curVal, idx) => {
//       return perVal + ++idx;
//     }, 0);
// console.log(sum(1));

//[5,7,9,6,20]
// [5, 7, 9, 6, 20];
// const sum2 = () => {
//   const arr2 = [5, 7, 9, 6, 20].reduce(
//     (perVal, currVal) => perVal + currVal,
//     0
//   );
//   console.log(arr2);
// };
// sum2();
//
// const arr3 = [1, 3, 3, 3, 1, 5, 6, 7, 8, 1];
// const DuplicateRemove = [...new Set(arr3)];
// console.log(DuplicateRemove);

// const arr3 = [];
// const duplicateRemove = (arr) =>
//   arr.filter((num, idx, self) => self.indexOf(num) == idx);

// console.log(duplicateRemove([1, 3, 3, 3, 1, 5, 6, 7, 8, 1]));

// [2,4,6,8,10] // even condition checking
// [1,2,3,4,5]// even condition checking

// [0  1  2  3  4  5  6  7  8  9]
// [1, 3, 3, 3, 1, 5, 6, 7, 8, 1]
// [0  1  2  3  4  5  6  7  8  9]

// const evenNum = [2, 4, 6, 8, 10];
// const evenCheck = () => evenNum.every((item) => item % 2 === 0);
// console.log(evenCheck());

// const evenNum1 = [1, 2, 3, 4, 5];
// const evenCheck2 = () => evenNum1.some((item) => item % 2 === 0);
// console.log(evenCheck2());

// const removDuplicates = (arr) => {
//   const newArr = [];
//   arr.forEach((el) => {
//     if (newArr.includes(el)) {
//       return;
//     } else {
//       newArr.push(el);
//     }
//   });
//   console.log(newArr);
// };
// removDuplicates([1, 3, 3, 3, 1, 5, 6, 7, 8, 1]);

//

// const arr = [1, 3, 3, 3, 1, 5, 6, 7, 8, 1];
// const emty = [];
// const filArr = (arr) => {
//   arr.filter((item, idx, self) => {
//     if (emty.includes(item)) {
//       return;
//     } else {
//       emty.push(item);
//     }
//   });
//   console.log(emty);
// };
// console.log(filArr(arr));

// let chars = ["A", "B", "A", "C", "B"];

// let dupChars = chars.filter((element, index) => {
//   console.log(`${chars.indexOf(element)} ${element} !== ${index} ${element}`);
//   return chars.indexOf(element) !== index;
// });

// console.log(dupChars);
// let chars = ["A", "B", "A", "C", "B"];

// let uniqueChars = [];
// chars.forEach((element) => {
//   if (!uniqueChars.includes(element)) {
//     uniqueChars.push(element);
//   }
// });

// console.log(uniqueChars);

// const words = ["hello", "hii", "bye", "okay", "lol"];
// let emptyString = "";
// words.forEach((items) => {
//   if (items.length > emptyString) {
//     emptyString = items;
//   }
//   return;
// });

// console.log(emptyString.length);

// words.forEach((items) => {
//   if (items.length > emptyString) {
//     emptyString = items;
//   }
//   return;
// });

// console.log(emptyString.length);
// const words = "hello hii bye okay lol";
// const words2 = words.split(" ");
// console.log(words2);

// let largestWord = "";

// const words3 = words2.forEach((item) => {
//   if (item.length > largestWord) {
//     largestWord = item;
//     return largestWord;
//   }
// });
// console.log(words3);

/*------------------ recursion -------------------------*/
// function recurse(num) {
//   if (num % 2 === 0) {
//     console.log(num);
//   }
//   num++;
//   if (num <= 10) {
//     recurse(num);
//   }
// }

// recurse(1);

// const someObj = {
//   propName: "John",
// };

// function propPrefix(str) {
//   const s = "prop";
//   return s + str;
// }

// consropPrefix("Name");(checkProp)
// console.log(someObj[someProp]);

// function checkObj(obj, checkProp) {
//   // Only change code below this line
//   if (obj.hasOwnProperty(checkProp)) {
//     return obj[checkProp];
//   } else {
//     return "Not Found";
//   }
//   // Only change code above this line
// }

// console.log(
//   checkObj(
//     {
//       gift: "pony",
//       pet: "kitten",
//       bed: "sleigh",
//       city: "Seattle",
//     },
//     "city"
//   )
// );

// const myStorage = {
//   car: {
//     inside: {
//       "glove box": "maps",
//       "passenger seat": "crumbs",
//     },
//     outside: {
//       trunk: "jack",
//     },
//   },
// };

// const gloveBoxContents = myStorage.car.inside["glove box"];
// console.log(gloveBoxContents);

// Setup
// const recordCollection = {
//   2548: {
//     albumTitle: "Slippery When Wet",
//     artist: "Bon Jovi",
//     tracks: ["Let It Rock", "You Give Love a Bad Name"],
//   },
//   2468: {
//     albumTitle: "1999",
//     artist: "Prince",
//     tracks: ["1999", "Little Red Corvette"],
//   },
//   1245: {
//     artist: "Robert Palmer",
//     tracks: [],
//   },
//   5439: {
//     albumTitle: "ABBA Gold",
//   },
// };

// // Only change code below this line
// function updateRecords(records, id, prop, value) {
//   if (prop !== "tracks" && value !== "") {
//     records[id][prop] = value;
//   } else if (
//     prop === "tracks" &&
//     records[id].hasOwnProperty("tracks") === false
//   ) {
//     records[id][prop] = [value];
//   } else if (prop === "tracks" && value !== "") {
//     records[id][prop].push(value);
//   } else if (value === "") {
//     delete records[id][prop];
//   }
//   return records;
// }
// console.log(updateRecords(recordCollection, 5439, "artist", "ABBA"));
// console.log(
//   updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me")
// );
// const myArray = [];

// // Only change code below this line
// let i = 5;

// while (i >= 0) {
//   myArray.push(i);
//   i--;
// }
// console.log(myArray);

//
// const ourArray = [];

// for (let i = 0; i < 10; i += 2) {
//   ourArray.push(i);
// }
// const myArr = [2, 3, 4, 5, 6];

// // Only change code below this line
// let total = 0;
// for (let i = 0; i < myArr.length; i++) {
//   total += myArr[i];
//   console.log(`total = ${total} + ${myArr[i]}`);
// }
// console.log(total);
// const arr = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];

// for (let i = 0; i < arr.length; i++) {
//   //   console.log(`${i} = ${i}< ${arr.length} for i`);
//   for (let j = 0; j < arr[i].length; j++) {
//     console.log(`${j} = ${j}< ${arr[i].length} for j`);
//     console.log(arr[i][j]);
//   }
// }

//
// function multiplyAll(arr) {
//   let product = 1;
//   // Only change code below this line
//   for (let i = 0; i < arr.length; i++) {
//     // console.log(product);
//     for (let j = 0; j < arr[i].length; j++) {
//       product *= arr[i][j];
//       //   console.log(`product = ${product} * ${arr[i][j]} for j`);
//     }
//   }
//   console.log(product);
//   // Only change code above this line
//   return product;
// }

// multiplyAll([
//   [1, 2],
//   [3, 4],
//   [5, 6, 7],
// ]);
// multiplyAll([[1], [2], [3]]);
// multiplyAll([
//   [5, 1],
//   [0.2, 4, 0.5],
//   [3, 9],
// ]);

// multipliction

// function multiply(arr, n) {
//   if (n <= 0) {
//     return 1;
//   } else {
//     return multiply(arr, n - 1) * arr[n - 1];
//   }
// }
// console.log(multiply([5, 5, 5], 5));
//
// Setup
// const contacts = [
//   {
//     firstName: "Akira",
//     lastName: "Laine",
//     number: "0543236543",
//     likes: ["Pizza", "Coding", "Brownie Points"],
//   },
//   {
//     firstName: "Harry",
//     lastName: "Potter",
//     number: "0994372684",
//     likes: ["Hogwarts", "Magic", "Hagrid"],
//   },
//   {
//     firstName: "Sherlock",
//     lastName: "Holmes",
//     number: "0487345643",
//     likes: ["Intriguing Cases", "Violin"],
//   },
//   {
//     firstName: "Kristian",
//     lastName: "Vos",
//     number: "unknown",
//     likes: ["JavaScript", "Gaming", "Foxes"],
//   },
// ];

// function lookUpProfile(name, prop) {
//   // Only change code below this line
//   for (let i = 0; i < contacts.length; i++) {
//     if (name === contacts[i].firstName) {
//       if()
//     }
//   }
//   // Only change code above this line
// }

// lookUpProfile("Akira", "likes");

// const titleCase = (str) => {
//   str
//     .trim()
//     .split(" ")
//     .map((word) => word[0].toUpperCase + word.slice(1))
//     .join(" ");
// };
// console.log(titleCase(" hello a am faran "));

// var printNumTwo;
// for (var i = 0; i < 3; i++) {
//   if (i === 2) {
//     printNumTwo = function () {
//       return i;
//     };
//   }
// }
// console.log(printNumTwo());

// let printNumTwo;
// for (let i = 0; i < 3; i++) {
//   if (i === 2) {
//     printNumTwo = function () {
//       return i;
//     };
//   }
// }
// console.log(printNumTwo());
// // console.log(i);
//

// function checkScope() {
//   let i = "function scope";
//   if (true) {
//     let i = "block scope";
//     console.log("Block scope i is: ", i);
//   }
//   console.log("Function scope i is: ", i);
//   return i;
// }
// checkScope();

// function freezeObj() {
//   const MATH_CONSTANTS = {
//     PI: 3.14,
//   };
//   // Only change code below this line
//   Object.freeze(MATH_CONSTANTS);
//   // Only change code above this line
//   try {
//     MATH_CONSTANTS.PI = 99;
//   } catch (ex) {
//     console.log(ex);
//   }
//   return MATH_CONSTANTS.PI;
// }
// const PI = freezeObj();

// function howMany(...args) {
//   return "You have passed " + args.length + " arguments.";
// }
// console.log(howMany(0, 1, 2));
// console.log(howMany("string", null, [1, 2, 3], {}));

// function randomRange(myMin, myMax) {
//   // Only change code below this line
//   // let high = myMax;
//   // let low = myMin;
//   Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
//   return 0;
//   // Only change code above this line
// }
// randomRange(1, 5);

// function checkSign(num) {
//   return num ? "positive" : !num ? "negative" : "zero";
// }

// checkSign(-12);

// function countup(n) {
//   if (n < 1) {
//     return [];
//   } else {
//     const countArray = countup(n - 1);
//     countArray.unshift(n);
//     return countArray;
//   }
// }
// console.log(countup(5));
// function rangeOfNumbers(startNum, endNum) {
//   if (startNum - endNum === 0) {
//     return [startNum];
//   } else {
//     const arr = rangeOfNumbers(startNum, endNum - 1);
//     arr.push(endNum);
//     return arr;
//   }
// }
// console.log(rangeOfNumbers(1, 5));

// const stats = {
//   max: 56.78,
//   standard_deviation: 4.34,
//   median: 34.54,
//   mode: 23.87,
//   min: -0.75,
//   average: 35.85,
// };

// // Only change code below this line
// const half = (stats) => {
//   const { max, min } = stats;
//   stats = (max + min) / 2.0;
// };
// half(stats);
//
//

// const createPerson = (name, age, gender) =>
//   // Only change code below this line
//   ({
//     name,
//     age,
//     gender,
//   });
// // Only change code above this line
// "Zodiac Hasbro", 56, "male";
//
// Only change code below this line
//

// const bicycle = {
//   gear: 2,
//   setGear(newGear) {
//     this.gear = newGear;
//   },
// };
// // Only change code above this line
// bicycle.setGear(3);
// console.log(bicycle.gear);

// var SpaceShuttle = function (targetPlanet) {
//   this.targetPlanet = targetPlanet;
// };
// var zeus = new SpaceShuttle("Jupiter");
// console.log(zeus);
//

// Only change code below this line
// class Vegetable {
//   constructor(name) {
//     this.name = name;
//   }
// }
// // Only change code above this line

// const carrot = new Vegetable("carrot");
// console.log(carrot.name); // Should display 'carrot'

// Only change code below this line
// class Thermostat {
//   constructor(Fahrenheit) {
//     this.Fahrenheit = Fahrenheit;
//   }
//   // getter
//   get temperature() {
//     return this.Celsius;
//   }
//   // setter
//   set temperature(updatedAuthor) {
//     this._author = updatedAuthor;
//   }
// }
// // Only change code above this line

// const thermos = new Thermostat(76); // Setting in Fahrenheit scale
// let temp = thermos.temperature; // 24.44 in Celsius
// thermos.temperature = 26;
// temp = thermos.temperature; // 26 in Celsius

// //
// const makeServerRequest = new Promise((resolve, reject) => {});

//

// const makeServerRequest = new Promise((resolve, reject) => {
//   // responseFromServer represents a response from a server
//   let responseFromServer = true;

//   if (responseFromServer) {
//     resolve("We got the data"); // Change this line
//   } else {
//     reject("Data not received"); // Change this line
//   }
// });
// console.log(makeServerRequest);
//
// let alphabet = "abcdefghijklmnopqrstuvwxyz";
// let len = alphabet.length;
// // console.log(alphabet.length);
// for (let i = 0; i <= len; i++) {
//   // console.log(`${alphabet[i]}=>${i}`);
// }
// for (let j = 1; j < len; j++) {
//   // console.log(alphabet[j]);
// }
// for (let k = 0; k < len; k++) {
//   // console.log(alphabet[k]);
// }
//
// let newArray = [];
// let row = [];
// function zeroArray(m, n) {
//   // Creates a 2-D array with m rows and n columns of zeroes
//   for (let i = 0; i < m; i++) {
//     // Adds the m-th row into newArray

//     for (let j = 0; j < n; j++) {
//       // Pushes n zeroes into the current row to create the columns
//       row.push(0);
//     }
//     // Pushes the current row, which now has n zeroes in it, to the array
//     newArray.push(row);
//   }
//   return newArray;
// }
// zeroArray(5, 5);
// console.log(newArray);
// console.log(row);
//
// function zeroArray(m, n) {
//   let newArray = [];
//   // Creates a 2-D array with m rows and n columns of zeroes
//   for (let i = 0; i < m; i++) {
//     // Adds the m-th row into newArray
//     let row = [];

//     for (let j = 0; j < n; j++) {
//       // Pushes n zeroes into the current row to create the columns
//       row.push(0);
//     }
//     // Pushes the current row, which now has n zeroes in it, to the array
//     newArray.push(row);
//   }
//   return newArray;
// }
// // zeroArray(3, 2);
// // console.log(newArray);
// // console.log(row);
// let matrix = zeroArray(3, 2);
// console.log(matrix);
//
// splice
// let array = ["today", "was", "not", "so", "great"];

// array.splice(2, 2);
// console.log(array);
//
// let array = ["I", "am", "feeling", "really", "happy"];

// let newArray = array.splice(3, 2);
// console.log(newArray);
// slice
// function forecast(arr) {
//   // Only change code below this line
//   let arr2 = arr.slice(2, 4);
//   console.log(arr2);
//   return arr;
// }

// // Only change code above this line
// console.log(
//   forecast(["cold", "rainy", "warm", "sunny", "cool", "thunderstorms"])
// );
//
// function copyMachine(arr, num) {
//   let newArr = [];
//   while (num >= 1) {
//     // Only change code below this line
//     newArr.push([...arr]);
//     // Only change code above this line
//     num--;
//   }
//   return newArr;
// }

// console.log(copyMachine([true, false, true], 2));
//

// function quickCheck(arr, elem) {
//   // Only change code below this line
//   if (arr.indexOf(elem) >= 0) {
//     return true;
//   } else {
//     return false;
//   }
//   // Only change code above this line
// }

// console.log(quickCheck(["squash", "onions", "shallots"], "mushrooms"));
//
// function filteredArray(arr, elem) {
//   let newArr = [];
//   // Only change code below this line
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].indexOf(elem) === -1) {
//       newArr.push(arr[i]);
//     }
//   }
//   // Only change code above this line
//   return newArr;
// }

// console.log(
//   filteredArray(
//     [
//       [3, 2, 3],
//       [1, 6, 3],
//       [3, 13, 26],
//       [19, 3, 9],
//     ],
//     3
//   )
// );

// console.log(
//   filteredArray(
//     [
//       [10, 8, 3],
//       [14, 6, 23],
//       [3, 18, 6],
//     ],
//     18
//   )
// );
//
// let myNestedArray = [
//   // Only change code below this line
//   ["unshift", false, 1, 2, 3, "complex", "nested"],
//   ["loop", "shift", 6, 7, 1000, "method"],
//   ["concat", false, true, "spread", "array"],
//   ["mutate", 1327.98, "splice", "slice", "push"],
//   ["iterate", 1.3849, 7, "8.4876", "arbitrary", "depth"],
//   // Only change code above this line
// ];
//
// let users = {
//   Alan: {
//     age: 27,
//     online: true,
//   },
//   Jeff: {
//     age: 32,
//     online: true,
//   },
//   Sarah: {
//     age: 48,
//     online: true,
//   },
//   Ryan: {
//     age: 19,
//     online: true,
//   },
// };

// function isEveryoneHere(userObj) {
//   // Only change code below this line
//   if (
//     userObj.hasOwnProperty("alan") &&
//     userObj.hasOwnProperty("Jeff") &&
//     userObj.hasOwnProperty("Sarah") &&
//     userObj.hasOwnProperty("Ryan")
//   ) {
//     return true;
//   } else {
//     return false;
//   }
//   // Only change code above this line
// }

// console.log(isEveryoneHere(users));
//
// const users = {
//   Alan: {
//     online: false,
//   },
//   Jeff: {
//     online: false,
//   },
//   Sarah: {
//     online: false,
//   },
// };

// function countOnline(usersObj) {
//   // Only change code below this line
//   for (let user in usersObj) {
//     if (usersObj[user]["online"] === true) {
//       return 1;
//     } else if (usersObj[user]["online"] === false) {
//       return 2;
//     } else {
//       return 0;
//     }
//   }
//   // Only change code above this line
// }

// console.log(countOnline(users));
//
// const users = {
//   Alan: {
//     online: false,
//   },
//   Jeff: {
//     online: true,
//   },
//   Sarah: {
//     online: false,
//   },
// };

// function countOnline(usersObj) {
//   // Only change code below this line
//   let num = 0;
//   for (let user in usersObj) {
//     if (usersObj[user]["online"] === true) {
//       num++;
//     }
//   }
//   return num;
//   // Only change code above this line
// }

// console.log(countOnline(users));
//
// let users = {
//   Alan: {
//     age: 27,
//     online: false,
//   },
//   Jeff: {
//     age: 32,
//     online: true,
//   },
//   Sarah: {
//     age: 48,
//     online: false,
//   },
//   Ryan: {
//     age: 19,
//     online: true,
//   },
// };

// function getArrayOfUsers(obj) {
//   // Only change code below this line
//   return Object.key(obj);
//   // Only change code above this line
// }

// console.log(getArrayOfUsers(users));
//
// let user = {
//   name: "Kenneth",
//   age: 28,
//   data: {
//     username: "kennethCodesAllDay",
//     joinDate: "March 26, 2016",
//     organization: "freeCodeCamp",
//     friends: ["Sam", "Kira", "Tomo"],
//     location: {
//       city: "San Francisco",
//       state: "CA",
//       country: "USA",
//     },
//   },
// };

// function addFriend(userObj, friend) {
//   // Only change code below this line
//   userObj.data.friends.push(friend);
//   return userObj.data.friends;
//   // Only change code above this line
// }

// console.log(addFriend(user, "Pete"));

// function reverseString(str) {
//   return str.trim().split("").reverse().join("");
// }

// console.log(reverseString("hello"));
//  factorial
// function factorialize(num) {
//   let product = num;
//   if (num === 0) {
//     return 1;
//   }
//   for (let i = 1; i < num; ) {
//     product = product * i;
//     i++;
//   }
//   return product;
// }

// console.log(factorialize(0));
//
// function findLongestWordLength(str) {
//   let longestLength = "";
//   str.split(" ").filter((word, idx, array) => {
//     if (word.length > longestLength.length) {
//       longestLength = word;
//     }
//   });
//   return longestLength.length;
// }
// console.log(
//   findLongestWordLength("The quick brown fox jumped over the lazy dog")
// );
//
// function largestOfFour(arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     result.push(Math.max(...arr[i]));
//   }
//   return result;
// }
// console.log(
//   largestOfFour([
//     [4, 5, 1, 3],
//     [13, 27, 18, 26],
//     [32, 35, 37, 39],
//     [1000, 1001, 857, 1],
//   ])
// );
// //
// function confirmEnding(str, target) {
//   return str.slice(-target.length) === target;
// }

// console.log(confirmEnding("Bastian", "n"));
//
// function repeatStringNumTimes(str, num) {
//   return str.repeat(num);
// }

// console.log(repeatStringNumTimes("abc", 3));
//

// function repeatStringNumTimes(str, num) {
//   let str2 = "";
//   for (let i = 0; i < num; i++) {
//     str2 += str;
//   }
//   return str2;
// }

// console.log(repeatStringNumTimes("abc", 3));
//

// function findElement(arr, func) {
//   let num = 0;
//   for (let i = 0; i < arr.length; i++) {
//     num = arr[i];
//     if (func(num)) {
//       return num;
//     }
//   }
// }

// console.log(findElement([1, 2, 3, 4], (num) => num % 2 === 0));
// console.log(
//   findElement([1, 3, 5, 9], function (num) {
//     return num % 2 === 0;
//   })
// );
// console.log(
//   findElement([1, 3, 5, 8, 9, 10], function (num) {
//     return num % 2 === 0;
//   })
// );

// const finder = (num) => num % 2 === 0;
// console.log(finder(4));
//
// function booWho(bool) {
//   if (bool === true || bool === false) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(booWho(false));
// //
// function titleCase(str) {
//   return str
//     .trim()
//     .split(" ")
//     .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
//     .join(" ");
// }

// console.log(titleCase("I'm a little tea pot"));
// console.log(titleCase("sHoRt AnD sToUt"));
//
// function frankenSplice(arr1, arr2, n) {
// let arr3 = [...arr2]
// arr2.splice(n, 0, ...arr1);
// retrun arr3;
// }

// console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
//
// function bouncer(arr) {
//   return arr.filter((word) => word);
// }

// bouncer([7, "ate", "", false, 9]);
//
// function getIndexToIns(arr, num) {
//   arr.sort((a, b) => a - b);
//   //   .forEach((ele, idx) => {
//   //     if (ele > num) {
//   //       return idx;
//   //     }
//   //   });
//   // return arr.length;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > num) {
//       return i;
//     }
//   }
//   return arr.length;
// }

// // getIndexToIns([40, 60], 50);
// console.log(getIndexToIns([10, 20, 30, 40, 50], 35));
//
// function chunkArrayInGroups(arr, size) {
//   const arr2 = [];
//   arr.slice(size);
//   return arr2.push(arr2);
// }

// console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));

// function truncateString(str, num) {
//   // return str.trim().split(" ").slice(0, num).join("...");
//   if (str.length > num) {
//     return str.slice(0, num) + "...";
//   } else {
//     return str;
//   }
// }

// // console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
// console.log(
//   truncateString(
//     "A-tisket a-tasket A green and yellow basket",
//     "A-tisket a-tasket A green and yellow basket".length
//   )
// );

// function mutation(arr) {
// let firstString = arr[0].toLowerCase().split("");
// let secondString = arr[1].toLowerCase().split("");
// console.log(firstString, secondString);
// for (let i = 0; i < firstString.length; i++) {
//   if (secondString.indexOf(secondString[i]) < 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// return arr.every((word) => {
//   if (word.split("") === secondString) {
//     return true;
//   }
// });
// let test = arr[1].toLowerCase();
// let target = arr[0].toLowerCase();
// for (let i = 0; i < test.length; i++) {
//   if (target.indexOf(test[i]) < 0) return false;
// }
// return true;
// }
// console.log(mutation(["hello", "hey"]));
//

// // Function that returns a string representing a cup of green tea
// const prepareTea = () => "greenTea";

// /*
// Given a function (representing the tea type) and number of cups needed, the
// following function returns an array of strings (each representing a cup of
// a specific type of tea).
// */
// const getTea = (numOfCups) => {
//   const teaCups = [];

//   for (let cups = 1; cups <= numOfCups; cups += 1) {
//     const teaCup = prepareTea();
//     teaCups.push(teaCup);
//   }
//   return teaCups;
// };

// // Only change code below this line
// const tea4TeamFCC = getTea(40);
// console.log(tea4TeamFCC);
// // Only change code above this line
//
// Function that returns a string representing a cup of green tea
// const prepareGreenTea = () => "greenTea";

// // Function that returns a string representing a cup of black tea
// const prepareBlackTea = () => "blackTea";

// /*
// Given a function (representing the tea type) and number of cups needed, the
// following function returns an array of strings (each representing a cup of
// a specific type of tea).
// */
// const getTea = (prepareTea, numOfCups) => {
//   const teaCups = [];

//   for (let cups = 1; cups <= numOfCups; cups += 1) {
//     const teaCup = prepareTea();
//     teaCups.push(teaCup);
//   }
//   return teaCups;
// };

// // Only change code below this line
// const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
// const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);
// // Only change code above this line

// console.log(tea4GreenTeamFCC, tea4BlackTeamFCC);
//
// function chunkArrayInGroups(arr, size) {
//   let arr2 = [];
//   while (arr.length > 0) {
//     arr2.push(arr.splice(0, size));
//   }
//   return arr2;
// }

// console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
//
// The global variable
// const watchList = [
//   {
//     Title: "Inception",
//     Year: "2010",
//     Rated: "PG-13",
//     Released: "16 Jul 2010",
//     Runtime: "148 min",
//     Genre: "Action, Adventure, Crime",
//     Director: "Christopher Nolan",
//     Writer: "Christopher Nolan",
//     Actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
//     Plot: "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
//     Language: "English, Japanese, French",
//     Country: "USA, UK",
//     Awards: "Won 4 Oscars. Another 143 wins & 198 nominations.",
//     Poster:
//       "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//     Metascore: "74",
//     imdbRating: "8.8",
//     imdbVotes: "1,446,708",
//     imdbID: "tt1375666",
//     Type: "movie",
//     Response: "True",
//   },
//   {
//     Title: "Interstellar",
//     Year: "2014",
//     Rated: "PG-13",
//     Released: "07 Nov 2014",
//     Runtime: "169 min",
//     Genre: "Adventure, Drama, Sci-Fi",
//     Director: "Christopher Nolan",
//     Writer: "Jonathan Nolan, Christopher Nolan",
//     Actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//     Plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//     Language: "English",
//     Country: "USA, UK",
//     Awards: "Won 1 Oscar. Another 39 wins & 132 nominations.",
//     Poster:
//       "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
//     Metascore: "74",
//     imdbRating: "8.6",
//     imdbVotes: "910,366",
//     imdbID: "tt0816692",
//     Type: "movie",
//     Response: "True",
//   },
//   {
//     Title: "The Dark Knight",
//     Year: "2008",
//     Rated: "PG-13",
//     Released: "18 Jul 2008",
//     Runtime: "152 min",
//     Genre: "Action, Adventure, Crime",
//     Director: "Christopher Nolan",
//     Writer:
//       "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
//     Actors: "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
//     Plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
//     Language: "English, Mandarin",
//     Country: "USA, UK",
//     Awards: "Won 2 Oscars. Another 146 wins & 142 nominations.",
//     Poster:
//       "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
//     Metascore: "82",
//     imdbRating: "9.0",
//     imdbVotes: "1,652,832",
//     imdbID: "tt0468569",
//     Type: "movie",
//     Response: "True",
//   },
//   {
//     Title: "Batman Begins",
//     Year: "2005",
//     Rated: "PG-13",
//     Released: "15 Jun 2005",
//     Runtime: "140 min",
//     Genre: "Action, Adventure",
//     Director: "Christopher Nolan",
//     Writer:
//       "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
//     Actors: "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
//     Plot: "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
//     Language: "English, Urdu, Mandarin",
//     Country: "USA, UK",
//     Awards: "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
//     Poster:
//       "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
//     Metascore: "70",
//     imdbRating: "8.3",
//     imdbVotes: "972,584",
//     imdbID: "tt0372784",
//     Type: "movie",
//     Response: "True",
//   },
//   {
//     Title: "Avatar",
//     Year: "2009",
//     Rated: "PG-13",
//     Released: "18 Dec 2009",
//     Runtime: "162 min",
//     Genre: "Action, Adventure, Fantasy",
//     Director: "James Cameron",
//     Writer: "James Cameron",
//     Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//     Plot: "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//     Language: "English, Spanish",
//     Country: "USA, UK",
//     Awards: "Won 3 Oscars. Another 80 wins & 121 nominations.",
//     Poster:
//       "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
//     Metascore: "83",
//     imdbRating: "7.9",
//     imdbVotes: "876,575",
//     imdbID: "tt0499549",
//     Type: "movie",
//     Response: "True",
//   },
// ];

// Only change code below this line

// const ratings = [];
// for (let i = 0; i < watchList.length; i++) {
//   ratings.push({
//     title: watchList[i]["Title"],
//     rating: watchList[i]["imdbRating"],
//   });
// }
// const ratings = watchList.map((item) => ({
//   title: item["Title"],
//   rating: item["imdbRating"],
// }));
// Only change code above this line

// console.log(JSON.stringify(ratings));

// const filteredList = watchList
//   .map((item) => ({
//     title: item.Title,
//     rating: item.imdbRating,
//   }))
//   .filter((item) => {
//     return item.rating >= 8.0;
//   });

// console.log(filteredList);

// const string = (str) => {
//   return str
//     .split(" ")
//     .map((word) => word.toLowerCase())
//     .join("-");
// };

// console.log(string("I Am Anas Khan"));

// const string2 = (str) => {
//   return str
//     .trim()
//     .split(" ")
//     .filter((word) => word)
//     .join("-")
//     .toLowerCase();
// };

// console.log(string2("  I Am ANAS    KHAN    "));

// (() => {
//   let x = (y = 10);
// })();

// console.log(typeof x);
// console.log(typeof y);

//
// const value = { number: 10 };

// const multiply = (x = { ...value }) => {
//   console.log((x.number *= 2));
// };

// multiply();
// multiply();
// multiply(value);
// multiply(value);
