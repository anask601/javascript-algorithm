# javascript-algorithm

## Table of Contents

- [1 print 20 event no. not start from zero](#1-print-20-event-no-not-start-from-zero1)
- [2](#2)
- [3](#3)
- [4](#4)
- [5](#5)

## 1 print 20 event no. not start from zero

```jsx
const num = [];
for (let i = 0; i <= 20; i++) {
  if (i === 0) {
    continue;
  }
  if (i % 2 === 0) {
    console.log(i);
  }
}
```

## 2

```jsx
for (let i = 20; i >= 0; i--) {
  if (i === 0) {
    continue;
  }
  console.log(i);
  console.log("\n");
}
```

## 3

```jsx
let star = "";
for (let i = 1; i <= 5; i++) {
  for (let j = 0; j < i; j++) {
    star += "*";
  }
  star += "\n";
}
console.log(star);
```

## 4

```jsx
for (let i = 0; i < 6; i++) {
  console.log(" * ".repeat(i));
}
for (let j = 5; j > 0; j--) {
  console.log(" * ".repeat(j));
}
```

## 5

```jsx
let star = "";
for (let i = 1; i <= 5; i++) {
  for (let j = 5; j > i - 1; j--) {
    star += "*";
  }
  star += "\n";
}
console.log(star);
```

## 6

```jsx
const yetNewArr = arr.filter((num) => {
  if (num % 2 === 0 && num !== 0) {
    return num;
  }
});

console.log(yetNewArr);
```

## 7

```jsx
const arr = [4, 5, 39, 1];
const newArr = arr.sort((a, b) => a - b);
console.log(arr);
console.log(newArr);
```

## 8

```jsx
const arr = [];
for (let i = 0; i <= 20; i++) {
  arr.push(i);
}
const table = (num) => {
  for (let i = 0; i <= 10; i++) {
    let multiply = num * i;
    console.log(multiply);
  }
};
table(4);
```

## 9

```jsx
const table2 = arr.forEach((num) => {
  let i = 1;
  let multiply = num * i;
  console.log(multiply);
});
table2();
```

## 10

```jsx
function table2(num) {
  arr.forEach((num2) => {
    let multiply = num * num2;
    console.log(multiply);
  });
}
table2(5);
```

## 11

```jsx
function table3(num) {
  const funcWithMap = arr.map((num3, idx) => {
    idx = num * num3;
    console.log(idx);
  });
  console.log(funcWithMap);
}
table3(5);
```

## 12

```jsx
function table(num) {
  const resArr = new Array(1, 2, 3, 4, 5, 6, 7, 9, 10).map((el) => el * num);
  console.log(resArr);
}
table(5);
```

## 13

```jsx

 const newArr = new Array(10);
 console.log(newArr);
 const newArr2 = Array.from(Array(10).keys());
 console.log(newArr2);
 const newArr3 = [...Array(10)];
 console.log(newArr3);
 console.log(Array.from([1, 2, 3], (x) => x + x));
 const newArr4 = Array.from({ length: 5 }).
```

## 14

```jsx
function table(num) {
  const resArr = Array.from(Array({ length: 10 })).map((el) => el * num);
  console.log(resArr);
}
table(5);
```

## 15

```jsx
function table(num) {
  const resArr = Array.from(Array(10)).map((el) => el * num);
  console.log(resArr);
}
table(5);
```

## 16

```jsx
function table(num) {
  const resArr = Array.from({ length: 10 }, (v, i) => i).map((el) => el * num);
  console.log(resArr);
}
table(5);
```

## 17

```jsx
function table(num) {
const resArr = Array.from({ length: 10 }, (v, i) => ).map((el) => el \* num);
console.log(resArr);
}
table(5);

```

## 18

```jsx
function table(num) {
const resArr = Array.from(Array(10).keys()).map((el) => el _ num);
console.log(resArr);
}
table(5);

```

## 19

```jsx
function table(num) {
const resArr = Array(10)
.fill()
.map((nums, index) => index + 1)
.map((el, idx) => ++idx _ num);
console.log(resArr);
}
table(5);

```

## 20

```jsx
function table(num) {
const resArr = Array(10)
.fill(num)
.map((num, index) => index + 1)
.map((el, idx) => \* num);
console.log(resArr);
}
table(5);

```

## 21

```jsx
const table = (num) =>
Array(10)
.fill(num)
.map((el, idx) => ++idx \* el);
console.log(table(5));

```

## 22

```jsx
// 1 to 10 sum

const arr = (num) =>
  Array(10)
    .fill(num)
    .map((el, idx) => idx + num);
console.log(arr(1, 10));
```

## 23

```jsx
const arr = (num, sum) =>
  Array(10)
    .fill(num)
    .forEach((el, idx) => (idx = el + num));
console.log(arr(1));
```

## 24

```jsx
const sum = () =>
  Array(10)
    .fill()
    .reduce((perVal, curVal, idx) => {
      return perVal + ++idx;
    }, 0);
console.log(sum(1));
```

## 25

```jsx
// [5,7,9,6,20]
// [5, 7, 9, 6, 20];
const sum2 = () => {
  const arr2 = [5, 7, 9, 6, 20].reduce(
    (perVal, currVal) => perVal + currVal,
    0
  );
  console.log(arr2);
};
sum2();
```

## 26

```jsx
const arr3 = [1, 3, 3, 3, 1, 5, 6, 7, 8, 1];
const DuplicateRemove = [...new Set(arr3)];
console.log(DuplicateRemove);
```

## 27

```jsx
const arr3 = [];
const duplicateRemove = (arr) =>
  arr.filter((num, idx, self) => self.indexOf(num) == idx);

console.log(duplicateRemove([1, 3, 3, 3, 1, 5, 6, 7, 8, 1]));
```

## 28

```jsx
// [2,4,6,8,10] even condition checking
// [1,2,3,4,5] even condition checking

// [0 1 2 3 4 5 6 7 8 9]
// [1, 3, 3, 3, 1, 5, 6, 7, 8, 1]
// [0 1 2 3 4 5 6 7 8 9]

const evenNum = [2, 4, 6, 8, 10];
const evenCheck = () => evenNum.every((item) => item % 2 === 0);
console.log(evenCheck());
```

## 29

```jsx
const evenNum1 = [1, 2, 3, 4, 5];
const evenCheck2 = () => evenNum1.some((item) => item % 2 === 0);
console.log(evenCheck2());
```

## 30

```jsx
const removDuplicates = (arr) => {
  const newArr = [];
  arr.forEach((el) => {
    if (newArr.includes(el)) {
      return;
    } else {
      newArr.push(el);
    }
  });
  console.log(newArr);
};
removDuplicates([1, 3, 3, 3, 1, 5, 6, 7, 8, 1]);
```

## 31

```jsx
const arr = [1, 3, 3, 3, 1, 5, 6, 7, 8, 1];
const emty = [];
const filArr = (arr) => {
  arr.filter((item, idx, self) => {
    if (emty.includes(item)) {
      return;
    } else {
      emty.push(item);
    }
  });
  console.log(emty);
};
console.log(filArr(arr));
```

## 32

```jsx
let chars = ["A", "B", "A", "C", "B"];

let dupChars = chars.filter((element, index) => {
  console.log(`${chars.indexOf(element)} ${element} !== ${index} ${element}`);
  return chars.indexOf(element) !== index;
});

console.log(dupChars);
```

## 33

```jsx
let chars = ["A", "B", "A", "C", "B"];

let uniqueChars = [];
chars.forEach((element) => {
  if (!uniqueChars.includes(element)) {
    uniqueChars.push(element);
  }
});

console.log(uniqueChars);
```

## 34

```jsx
const words = ["hello", "hii", "bye", "okay", "lol"];
let emptyString = "";
words.forEach((items) => {
  if (items.length > emptyString) {
    emptyString = items;
  }
  return;
});

console.log(emptyString.length);
words.forEach((items) => {
  if (items.length > emptyString) {
    emptyString = items;
  }
  return;
});

console.log(emptyString.length);
```

## 35

```jsx
const words = "hello hii bye okay lol";
const words2 = words.split(" ");
console.log(words2);
```

## 36

```jsx
let largestWord = "";

const words3 = words2.forEach((item) => {
  if (item.length > largestWord) {
    largestWord = item;
    return largestWord;
  }
});
console.log(words3);
```

## 37

```jsx
/_------------------ recursion ---------------_/;
function recurse(num) {
  if (num % 2 === 0) {
    console.log(num);
  }
  num++;
  if (num <= 10) {
    recurse(num);
  }
}

recurse(1);
```

## 38

```jsx
const someObj = {
  propName: "John",
};

function propPrefix(str) {
  const s = "prop";
  return s + str;
}

consropPrefix("Name");
checkProp;
console.log(someObj[someProp]);
```

## 39

```jsx
function checkObj(obj, checkProp) {
Only change code below this line
if (obj.hasOwnProperty(checkProp)) {
return obj[checkProp];
} else {
return "Not Found";
}
Only change code above this line
}

console.log(
checkObj(
{
gift: "pony",
pet: "kitten",
bed: "sleigh",
city: "Seattle",
},
"city"
)
);

```

## 40

```jsx
const myStorage = {
  car: {
    inside: {
      "glove box": "maps",
      "passenger seat": "crumbs",
    },
    outside: {
      trunk: "jack",
    },
  },
};

const gloveBoxContents = myStorage.car.inside["glove box"];
console.log(gloveBoxContents);
```

## 41

```jsx

Setup
const recordCollection = {
2548: {
albumTitle: "Slippery When Wet",
artist: "Bon Jovi",
tracks: ["Let It Rock", "You Give Love a Bad Name"],
},
2468: {
albumTitle: "1999",
artist: "Prince",
tracks: ["1999", "Little Red Corvette"],
},
1245: {
artist: "Robert Palmer",
tracks: [],
},
5439: {
albumTitle: "ABBA Gold",
},
};

Only change code below this line
function updateRecords(records, id, prop, value) {
if (prop !== "tracks" && value !== "") {
records[id][prop] = value;
} else if (
prop === "tracks" &&
records[id].hasOwnProperty("tracks") === false
) {
records[id][prop] = [value];
} else if (prop === "tracks" && value !== "") {
records[id][prop].push(value);
} else if (value === "") {
delete records[id][prop];
}
return records;
}
console.log(updateRecords(recordCollection, 5439, "artist", "ABBA"));
console.log(
updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me")
);
```

## 42

```jsx
const myArray = [];

Only change code below this line
let i = 5;

while (i >= 0) {
myArray.push(i);
i--;
}
console.log(myArray);

```

## 43

```jsx
const ourArray = [];

for (let i = 0; i < 10; i += 2) {
ourArray.push(i);
}
const myArr = [2, 3, 4, 5, 6];

Only change code below this line
let total = 0;
for (let i = 0; i < myArr.length; i++) {
total += myArr[i];
console.log(`total = ${total} + ${myArr[i]}`);
}
console.log(total);

```

## 44

```jsx
const arr = [
  [1, 2],
  [3, 4],
  [5, 6],
];

for (let i = 0; i < arr.length; i++) {
  console.log(`${i} = ${i}< ${arr.length} for i`);
  for (let j = 0; j < arr[i].length; j++) {
    console.log(`${j} = ${j}< ${arr[i].length} for j`);
    console.log(arr[i][j]);
  }
}
```

## 45

```jsx

function multiplyAll(arr) {
let product = 1;
Only change code below this line
for (let i = 0; i < arr.length; i++) {
console.log(product);
for (let j = 0; j < arr[i].length; j++) {
product _= arr[i][j];
console.log(`product = ${product} _ ${arr[i][j]} for j`);
}
}
console.log(product);
Only change code above this line
return product;
}

multiplyAll([
[1, 2],
[3, 4],
[5, 6, 7],
]);
multiplyAll([[1], [2], [3]]);
multiplyAll([
[5, 1],
[0.2, 4, 0.5],
[3, 9],
]);

```

## 46

```jsx
// multipliction

function multiply(arr, n) {
if (n <= 0) {
return 1;
} else {
return multiply(arr, n - 1) \* arr[n - 1];
}
}
console.log(multiply([5, 5, 5], 5));

```

## 47

```jsx

Setup
const contacts = [
{
firstName: "Akira",
lastName: "Laine",
number: "0543236543",
likes: ["Pizza", "Coding", "Brownie Points"],
},
{
firstName: "Harry",
lastName: "Potter",
number: "0994372684",
likes: ["Hogwarts", "Magic", "Hagrid"],
},
{
firstName: "Sherlock",
lastName: "Holmes",
number: "0487345643",
likes: ["Intriguing Cases", "Violin"],
},
{
firstName: "Kristian",
lastName: "Vos",
number: "unknown",
likes: ["JavaScript", "Gaming", "Foxes"],
},
];

function lookUpProfile(name, prop) {
Only change code below this line
for (let i = 0; i < contacts.length; i++) {
if (name === contacts[i].firstName) {
if()
}
}
Only change code above this line
}

lookUpProfile("Akira", "likes");
```

## 48

```jsx
const titleCase = (str) => {
  str
    .trim()
    .split(" ")
    .map((word) => word[0].toUpperCase + word.slice(1))
    .join(" ");
};
console.log(titleCase(" hello a am faran "));
```

## 49

```jsx
var printNumTwo;
for (var i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function () {
      return i;
    };
  }
}
console.log(printNumTwo());
```

## 50

```jsx
let printNumTwo;
for (let i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function () {
      return i;
    };
  }
}
console.log(printNumTwo());
console.log(i);
```

## 51

```jsx
function checkScope() {
  let i = "function scope";
  if (true) {
    let i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}
checkScope();
```

## 52

```jsx

function freezeObj() {
const MATH_CONSTANTS = {
PI: 3.14,
};
Only change code below this line
Object.freeze(MATH_CONSTANTS);
Only change code above this line
try {
MATH_CONSTANTS.PI = 99;
} catch (ex) {
console.log(ex);
}
return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

function howMany(...args) {
return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2));
console.log(howMany("string", null, [1, 2, 3], {}));

```

## 53

```jsx
function randomRange(myMin, myMax) {
Only change code below this line
let high = myMax;
let low = myMin;
Math.floor(Math.random() \* (myMax - myMin + 1)) + myMin;
return 0;
Only change code above this line
}
randomRange(1, 5);

```

## 54

```jsx
function checkSign(num) {
  return num ? "positive" : !num ? "negative" : "zero";
}

checkSign(-12);
```

## 55

```jsx
function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.unshift(n);
    return countArray;
  }
}
console.log(countup(5));
```

## 56

```jsx
function rangeOfNumbers(startNum, endNum) {
  if (startNum - endNum === 0) {
    return [startNum];
  } else {
    const arr = rangeOfNumbers(startNum, endNum - 1);
    arr.push(endNum);
    return arr;
  }
}
console.log(rangeOfNumbers(1, 5));
```

## 57

```jsx

const stats = {
max: 56.78,
standard_deviation: 4.34,
median: 34.54,
mode: 23.87,
min: -0.75,
average: 35.85,
};

Only change code below this line
const half = (stats) => {
const { max, min } = stats;
stats = (max + min) / 2.0;
};
half(stats);
```

## 58

```jsx
const createPerson = (name, age, gender) =>
Only change code below this line
({
name,
age,
gender,
});
Only change code above this line
"Zodiac Hasbro", 56, "male";

Only change code below this line

const bicycle = {
gear: 2,
setGear(newGear) {
this.gear = newGear;
},
};
Only change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);

```

## 59

```jsx
var SpaceShuttle = function (targetPlanet) {
  this.targetPlanet = targetPlanet;
};
var zeus = new SpaceShuttle("Jupiter");
console.log(zeus);
```

## 60

```jsx
const makeServerRequest = new Promise((resolve, reject) => {});

const makeServerRequest = new Promise((resolve, reject) => {
responseFromServer represents a response from a server
let responseFromServer = true;

if (responseFromServer) {
resolve("We got the data"); Change this line
} else {
reject("Data not received"); Change this line
}
});
console.log(makeServerRequest);

```

## 61

```jsx
let alphabet = "abcdefghijklmnopqrstuvwxyz";
let len = alphabet.length;
console.log(alphabet.length);
for (let i = 0; i <= len; i++) {
  console.log(`${alphabet[i]}=>${i}`);
}
for (let j = 1; j < len; j++) {
  console.log(alphabet[j]);
}
for (let k = 0; k < len; k++) {
  console.log(alphabet[k]);
}
```

## 62

```jsx
let newArray = [];
let row = [];
function zeroArray(m, n) {
Creates a 2-D array with m rows and n columns of zeroes
for (let i = 0; i < m; i++) {
Adds the m-th row into newArray

     for (let j = 0; j < n; j++) {
        Pushes n zeroes into the current row to create the columns
       row.push(0);
     }
      Pushes the current row, which now has n zeroes in it, to the array
     newArray.push(row);

}
return newArray;
}
zeroArray(5, 5);
console.log(newArray);
console.log(row);

```

## 63

```jsx
function zeroArray(m, n) {
let newArray = [];
Creates a 2-D array with m rows and n columns of zeroes
for (let i = 0; i < m; i++) {
Adds the m-th row into newArray
let row = [];

     for (let j = 0; j < n; j++) {
        Pushes n zeroes into the current row to create the columns
       row.push(0);
     }
      Pushes the current row, which now has n zeroes in it, to the array
     newArray.push(row);

}
return newArray;
}
zeroArray(3, 2);
console.log(newArray);
console.log(row);
let matrix = zeroArray(3, 2);
console.log(matrix);

```

## 64

```jsx
splice;
let array = ["today", "was", "not", "so", "great"];

array.splice(2, 2);
console.log(array);
```

## 65

```jsx
let array = ["I", "am", "feeling", "really", "happy"];

let newArray = array.splice(3, 2);
console.log(newArray);
slice
function forecast(arr) {
Only change code below this line
let arr2 = arr.slice(2, 4);
console.log(arr2);
return arr;
}

Only change code above this line
console.log(
forecast(["cold", "rainy", "warm", "sunny", "cool", "thunderstorms"])
);

```

## 66

```jsx
function copyMachine(arr, num) {
let newArr = [];
while (num >= 1) {
Only change code below this line
newArr.push([...arr]);
Only change code above this line
num--;
}
return newArr;
}

console.log(copyMachine([true, false, true], 2));

```

## 67

```jsx
function quickCheck(arr, elem) {
Only change code below this line
if (arr.indexOf(elem) >= 0) {
return true;
} else {
return false;
}
Only change code above this line
}

console.log(quickCheck(["squash", "onions", "shallots"], "mushrooms"));

```

## 68

```jsx
function filteredArray(arr, elem) {
let newArr = [];
Only change code below this line
for (let i = 0; i < arr.length; i++) {
if (arr[i].indexOf(elem) === -1) {
newArr.push(arr[i]);
}
}
Only change code above this line
return newArr;
}

console.log(
filteredArray(
[
[3, 2, 3],
[1, 6, 3],
[3, 13, 26],
[19, 3, 9],
],
3
)
);

console.log(
filteredArray(
[
[10, 8, 3],
[14, 6, 23],
[3, 18, 6],
],
18
)
);

```

## 69

```jsx
let myNestedArray = [
Only change code below this line
["unshift", false, 1, 2, 3, "complex", "nested"],
["loop", "shift", 6, 7, 1000, "method"],
["concat", false, true, "spread", "array"],
["mutate", 1327.98, "splice", "slice", "push"],
["iterate", 1.3849, 7, "8.4876", "arbitrary", "depth"],
Only change code above this line
];

let users = {
Alan: {
age: 27,
online: true,
},
Jeff: {
age: 32,
online: true,
},
Sarah: {
age: 48,
online: true,
},
Ryan: {
age: 19,
online: true,
},
};

function isEveryoneHere(userObj) {
Only change code below this line
if (
userObj.hasOwnProperty("alan") &&
userObj.hasOwnProperty("Jeff") &&
userObj.hasOwnProperty("Sarah") &&
userObj.hasOwnProperty("Ryan")
) {
return true;
} else {
return false;
}
Only change code above this line
}

console.log(isEveryoneHere(users));

```

## 70

```jsx
const users = {
Alan: {
online: false,
},
Jeff: {
online: false,
},
Sarah: {
online: false,
},
};

function countOnline(usersObj) {
Only change code below this line
for (let user in usersObj) {
if (usersObj[user]["online"] === true) {
return 1;
} else if (usersObj[user]["online"] === false) {
return 2;
} else {
return 0;
}
}
Only change code above this line
}

console.log(countOnline(users));

```

## 71

```jsx
const users = {
Alan: {
online: false,
},
Jeff: {
online: true,
},
Sarah: {
online: false,
},
};

function countOnline(usersObj) {
Only change code below this line
let num = 0;
for (let user in usersObj) {
if (usersObj[user]["online"] === true) {
num++;
}
}
return num;
Only change code above this line
}

console.log(countOnline(users));

```

## 72

```jsx
let users = {
Alan: {
age: 27,
online: false,
},
Jeff: {
age: 32,
online: true,
},
Sarah: {
age: 48,
online: false,
},
Ryan: {
age: 19,
online: true,
},
};

function getArrayOfUsers(obj) {
Only change code below this line
return Object.key(obj);
Only change code above this line
}

console.log(getArrayOfUsers(users));

```

## 73

```jsx
let user = {
name: "Kenneth",
age: 28,
data: {
username: "kennethCodesAllDay",
joinDate: "March 26, 2016",
organization: "freeCodeCamp",
friends: ["Sam", "Kira", "Tomo"],
location: {
city: "San Francisco",
state: "CA",
country: "USA",
},
},
};

function addFriend(userObj, friend) {
Only change code below this line
userObj.data.friends.push(friend);
return userObj.data.friends;
Only change code above this line
}

console.log(addFriend(user, "Pete"));

```

## 74

```jsx
function reverseString(str) {
return str.trim().split("").reverse().join("");
}

console.log(reverseString("hello"));
factorial
function factorialize(num) {
let product = num;
if (num === 0) {
return 1;
}
for (let i = 1; i < num; ) {
product = product \* i;
i++;
}
return product;
}

console.log(factorialize(0));

```

## 75

```jsx
function findLongestWordLength(str) {
  let longestLength = "";
  str.split(" ").filter((word, idx, array) => {
    if (word.length > longestLength.length) {
      longestLength = word;
    }
  });
  return longestLength.length;
}
console.log(
  findLongestWordLength("The quick brown fox jumped over the lazy dog")
);
```

## 76

```jsx
function largestOfFour(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(Math.max(...arr[i]));
  }
  return result;
}
console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);
```

## 77

```jsx
function confirmEnding(str, target) {
  return str.slice(-target.length) === target;
}

console.log(confirmEnding("Bastian", "n"));
```

## 78

```jsx
function repeatStringNumTimes(str, num) {
  return str.repeat(num);
}

console.log(repeatStringNumTimes("abc", 3));
```

## 79

```jsx
function repeatStringNumTimes(str, num) {
  let str2 = "";
  for (let i = 0; i < num; i++) {
    str2 += str;
  }
  return str2;
}

console.log(repeatStringNumTimes("abc", 3));
```

## 80

```jsx
function findElement(arr, func) {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) {
      return num;
    }
  }
}

console.log(findElement([1, 2, 3, 4], (num) => num % 2 === 0));

console.log(
  findElement([1, 3, 5, 9], function (num) {
    return num % 2 === 0;
  })
);

console.log(
  findElement([1, 3, 5, 8, 9, 10], function (num) {
    return num % 2 === 0;
  })
);
```

## 81

```jsx
const finder = (num) => num % 2 === 0;
console.log(finder(4));
```

## 82

```jsx
function booWho(bool) {
  if (bool === true || bool === false) {
    return true;
  } else {
    return false;
  }
}

console.log(booWho(false));
```

## 83

```jsx
function titleCase(str) {
  return str
    .trim()
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("sHoRt AnD sToUt"));
```

## 84

```jsx
function frankenSplice(arr1, arr2, n) {
let arr3 = [...arr2]
arr2.splice(n, 0, ...arr1);
retrun arr3;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

```

## 85

```jsx
function bouncer(arr) {
  return arr.filter((word) => word);
}

bouncer([7, "ate", "", false, 9]);
```

## 86

```jsx
function getIndexToIns(arr, num) {
arr.sort((a, b) => a - b);
.forEach((ele, idx) => {
if (ele > num) {
return idx;
}
});
return arr.length;
for (let i = 0; i < arr.length; i++) {
if (arr[i] > num) {
return i;
}
}
return arr.length;
}

getIndexToIns([40, 60], 50);
console.log(getIndexToIns([10, 20, 30, 40, 50], 35));

```

## 87

```jsx
function chunkArrayInGroups(arr, size) {
  const arr2 = [];
  arr.slice(size);
  return arr2.push(arr2);
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
```

## 88

```jsx
function truncateString(str, num) {
  return str.trim().split(" ").slice(0, num).join("...");
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
console.log(
  truncateString(
    "A-tisket a-tasket A green and yellow basket",
    "A-tisket a-tasket A green and yellow basket".length
  )
);
```

## 89

```jsx
function mutation(arr) {
  let firstString = arr[0].toLowerCase().split("");
  let secondString = arr[1].toLowerCase().split("");
  console.log(firstString, secondString);
  for (let i = 0; i < firstString.length; i++) {
    if (secondString.indexOf(secondString[i]) < 0) {
      return true;
    } else {
      return false;
    }
  }
  return arr.every((word) => {
    if (word.split("") === secondString) {
      return true;
    }
  });

  let test = arr[1].toLowerCase();
  let target = arr[0].toLowerCase();
  for (let i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) < 0) return false;
  }
  return true;
}
console.log(mutation(["hello", "hey"]));
```

## 90

```jsx
function chunkArrayInGroups(arr, size) {
  let arr2 = [];
  while (arr.length > 0) {
    arr2.push(arr.splice(0, size));
  }
  return arr2;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
```

## 91

```jsx
const string = (str) => {
  return str
    .split(" ")
    .map((word) => word.toLowerCase())
    .join("-");
};

console.log(string("I Am Anas Khan"));
```

## 92

```jsx
const string2 = (str) => {
  return str
    .trim()
    .split(" ")
    .filter((word) => word)
    .join("-")
    .toLowerCase();
};

console.log(string2(" I Am ANAS KHAN "));
```

## 93

```jsx
(() => {
  let x = (y = 10);
})();

console.log(typeof x);
console.log(typeof y);
```

## 94

```jsx
const value = { number: 10 };

const multiply = (x = { ...value }) => {
console.log((x.number \*= 2));
};

multiply();
multiply();
multiply(value);
multiply(value);

```

## 95

```jsx
const obj = [
  {
    name: "john",
    id: Math.random(),
    age: 16,
  },
  {
    name: "rashmi",
    id: Math.random(),
    age: 20,
  },
  {
    name: "nasir",
    id: Math.random(),
    age: 26,
  },
];

const obj2 = obj.find((person) => person.name === "nasir");
const obj3 = obj.every((person) => {
  if (person["age"] >= 18) {
    return true;
  }
  return false;
});
console.log(obj3);
```

## 96

```jsx
const reverseSent = (str) => {
  return str
    .trim()
    .split("")
    .reverse()
    .join("")
    .split(" ")
    .filter((word) => word)
    .reverse()
    .join(" ");
};

console.log(reverseSent("hi i   am nasir khan "));
```

## 97

```jsx
const isInt = (num) => {
  if (typeof num === "number " && num % 1 === 0) {
    return true;
  }
  return false;
};
console.log(10.33);
```

## 98

```jsx
const arr = (arr2) =>
arr2.filter((num) => num % 1 === 0 && num >= 0).map((ele) => ele \* ele);

console.log(arr([-4.3, 3, 5, -7, 5.6, 7.8, 9, 6, -3.4]));

```

## 99

```jsx
const obj = {
  name: "nasir",
  age: 23,
  city: "kalyan",
};

for (let key in obj) {
  console.log(`${key}: ${obj[key]}`);
}
```

## 100

```jsx
const obj = {
  info: {
    name: "nasir",
    age: 23,
    gender: "female",
    college: "mhssp",
  },
  location: {
    city: "kalyan",
    district: "thane",
    state: "maharashtra",
  },
};

// for (let key in obj) {
// for (let key2 in obj[key]) {
// console.log(`key in ${key} : ${obj[key][key2]}`);
// }
// }

// solution 1
for (let [keys, values] of Object.entries(obj)) {
  let i = 1;
  for (let [key, val] of Object.entries(values)) {
    console.log(`${i} key in ${keys} is "${key} : ${val}"`);
    i++;
  }
}

// solution 2
for (let keys in obj) {
  let i = 1;
  for (let key in obj[keys]) {
    console.log(`${i} key in ${keys} is "${key} : ${obj[keys][key]}"`);
    i++;
  }
}
```

console.log(min([2, 4, 0, 9, 0, 0, 7, 2, 1, 4, 7, 9, 0, 8, 4]));

## 101

```jsx
const matches = (obj1, obj2) =>
  Object.keys(obj2).every((key) => obj1[key] === obj2[key]);

console.log(matches({ id: 101, name: "test2" }, { id: 101, name: "test2" }));
```

## 102

```jsx
const emp1 = {
  id: 1,
  name: "test1",
  address: {
    city: "Mumbai",
    street: {
      name: "LoL street",
      houseNo: 25,
    },
  },
};

const emp2 = {
  id: 1,
  name: "test1",
  address: {
    city: "Mumbai",
    street: {
      name: "LoL street",
      houseNo: 5,
    },
  },
};

let result = false;
for (let key in emp2) {
  if (emp1.hasOwnProperty(key)) {
    if (typeof emp2[key] === "object") {
      for (let keys in emp2[key]) {
        if (typeof emp2[key][keys] === "object") {
          for (let nestedKey in emp2[key][keys]) {
            if (emp1[key][keys][nestedKey] === emp2[key][keys][nestedKey]) {
              result = true;
            } else {
              result = false;
            }
          }
        } else if (emp2[key][keys] === emp1[key][keys]) {
          result = true;
        } else {
          result = false;
        }
      }
    } else if (emp1[key] === emp2[key]) {
      result = true;
    } else {
      result = false;
    }
  } else {
    result = false;
  }
}
console.log(result);
```

## 103

```jsx
let arr = [1, 5, 5, 5, 10];
const sumOfArr = arr.reduce((perVal, currVal) => perVal + currVal, 0);
console.log(sumOfArr);
```

## 104

```jsx
const str2 = "hello 1 js 2 es5, es6, es7 react ninjas";
let obj = {};
const countChars = (str) =>
str
.split("")
.filter((char) => char !== " " && char !== "," && isNaN(+char))
.forEach((ele) => (obj[ele] = (obj[ele] || 0) + 1));
.forEach((ele) => (obj[ele] = obj[ele] ? obj[ele] + 1 : 1));

countChars(str2);
console.log(obj);

// forEach((ele) =>
// {
// obj[ele] = obj[ele] || 0 + 1;
// });

// str.split("").map((ele) => ({
// ele: ele,
// }));

// console.log(obj);
// {
// a: 2,
// c:1,
// e:5,
// ..
// ..
// }

```

## 105

```jsx
const input = "hello 1 js 2 es5, es6, es7 react ninjas";
const countChars = (str) => {
  console.log(
    str.split("").filter((char) => char !== " " && char !== "," && isNaN(+char))
  );
};
countChars(input);
```

## 106

```jsx
const num = [];
for (let i = 0; i <= 20; i++) {
  if (i === 0) {
    continue;
  }
  if (i % 2 === 0) {
    console.log(i);
  }
}
```

## 107

```jsx
for (let i = 20; i >= 0; i--) {
  if (i === 0) {
    continue;
  }
  console.log(i);
  console.log("\n");
}
```

## 108

```jsx
let star = "";
for (let i = 1; i <= 5; i++) {
  for (let j = 0; j < i; j++) {
    star += "*";
  }
  star += "\n";
}
console.log(star);
```

## 108

```jsx
for (let i = 0; i < 6; i++) {
  console.log(" * ".repeat(i));
}
for (let j = 5; j > 0; j--) {
  console.log(" * ".repeat(j));
}
```

## 109

```jsx
let star = "";
for (let i = 1; i <= 5; i++) {
  for (let j = 5; j > i - 1; j--) {
    star += "*";
  }
  star += "\n";
}
console.log(star);

//  *
//  **
//  ***
//  ****
//  *****
```

## 110

```jsx
function factorialize(num) {
  for (let i = 0; i <= num; i++) {
    if (num >= 0) {
      num *= num;
    }
  }
  return num;
}

console.log(factorialize(5));
```

## 111

```jsx
const square = [];
for (let i = 0; i <= 100; i++) {
  //   console.log(i);
  square.push(i);
}
// console.log(square);
const newSquare = square.filter((num) => {
  return num % 2 === 1; // for odd numbers
  return num % 2 === 0; // for even numbers
  for (let i = 0; i < square.length; i++) {
    return num % 2 === 1;
  }
  for (let i = 2; i * i <= num; i++) {
    // console.log(`${i} * ${i} <= ${num}`);
    if (num % i === 0) {
      return false;
    }
    // console.log(`${i} * ${i} <= ${num}`);
  }
  return num > 1;
});
console.log(newSquare);
// 1 ,3 5 7 11 13 17 19
```

## 112

```jsx
function x() {
  for (var i = 1; i <= 5; i++) {
    (function (i) {
      setTimeout(function () {
        console.log(i);
      }, i * 1000);
    })(i);
  }
}
x();
```

## 113 Anagram

```jsx
String.prototype.sortedString = (str) => {
  return str.split("").sort().join("");
};

const anagram = (str1, str2) =>
  str1.split("").sort().join("") === str2.split("").sort().join("");

console.log(anagram("india", "nidia"));

// String a= “india”
// String b= “nidia”

// String a= “hackathon”
// String b= “achcthoon”
```

## 114

```jsx
const user = {
  name: "test",
};
user.address.street;
user?.address.street;
user.address?.street;
user?.address?.street;
```

## 115

```jsx
const obj = {
  a: 1,
  b: 2,
  a: -1,
};
console.log(Object.values(obj));
```

## 116

```jsx
"use strict";
const user = {
  name: "foo",
  pr,
};

let a = 3,
  b = 2,
  c = 3;
[a, b, c] = [b, a];
console.log(a, b, c);
```

## 117

```jsx
const obj = { foo: 2, bar: 4 };
const entries = Object.entries(obj)
  .map((e) => [e[0], e[1] * 2])
  .map((e) => [e[1], e[0] + 1]);
console.log(entries);
```

## 118

```jsx
function generateCounter() {
  let count = 0;
  return function () {
    return count++;
  };
}
const inst1 = generateCounter();
const inst2 = generateCounter();

console.log(inst1(), inst1());
console.log(inst2(), inst2());
```

## 119

```jsx
const test = function () {
  let count = 0;
  return function () {
    console.log(count++);
  };
};
const test1 = test;
const test2 = test;
test();
test1();
test2();
```

## 120

```jsx
const words = ["hello", "hii", "bye", "okay", "lol"];

let largestword = "";

words.forEach((word) => {
  if (word.length > largestword.length) {
    largestword = word;
  }
  return;
});
console.log(largestword.length);
```

## 121

```jsx
const words = "hello hii bye okay lol";
const words2 = words.split(" ");
console.log(words2);
let largestWord = "";
words2.forEach((item) => {
  if (item.length > largestWord) {
    largestWord = item;
  }
  return;
});
console.log(largestWord);
```

## 122

```jsx
const string = (str) => {
  return str
    .split(" ")
    .map((word) => word.toLowerCase())
    .join("-");
};

console.log(string("I Am Anas Khan"));
```

## 123

```jsx
const string2 = (str) => {
  return str
    .trim()
    .split(" ")
    .filter((word) => word)
    .join("-")
    .toLowerCase();
};

console.log(string2(" I Am ANAS KHAN "));
```

## 124

```jsx
const string2 = (str) => {
  return str
    .trim()
    .split(" ")
    .filter((word) => word)
    .join()
    .toLowerCase();
};
```

## 125

```jsx
const removDuplicates = (arr) => {
  const newArr = [];
  arr.forEach((el) => {
    if (newArr.includes(el)) {
      return;
    } else {
      newArr.push(el);
    }
  });
  console.log(newArr);
};
removDuplicates([1, 3, 3, 3, 1, 5, 6, 7, 8, 1]);
```

## 126

```jsx
const removDuplicates = (arr) => {
  arr.forEach((el, idx, array) => {
    if (array[idx] !== idx) {
      return;
    }
    console.log(el);
  });
};

removDuplicates([1, 3, 3, 3, 1, 5, 6, 7, 8, 1]);
```

## 127

```jsx
function table(num) {
const resArr = Array(10)
.fill("")
// .map((nums, index) => index + 1)
.map((el, idx) => el \* num);
console.log(resArr);
}
table(5);

```

## 128

```jsx
function reverseString(str) {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    arr.unshift(str[i]);
  }
  str = arr.join(",").toString();
  console.log(str);
  return str;
}

reverseString("hello world");
```

## 129

```jsx
function findLongestWordLength(str) {
  let arr = str.split(" ");
  arr.forEach((word) => word.length > "");
  console.log(arr);
  // return str.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
```

## 130

```jsx
function repeatStringNumTimes(str, num) {
  let repeatedStr = "";
  for (let i = 0; i < num; i++) {
    repeatedStr += str;
  }
}

repeatStringNumTimes("abc", 3);
```

## 131

```jsx
function repeatStringNumTimes(str, num) {
if (num > 0){
let repeatedStr = "";
for ( let i = 0; i < num; i++){
repeatedStr += str
}
return repeatedStr
}
else {
return "";
}
}
}

repeatStringNumTimes("abc", 3);

```

## 132

```jsx
const sizeOfMinValue = (array) => {
  let minVal = Math.min(...array);
  const legthOfMin = array.filter((num) => num === minVal);
  return legthOfMin.length;
};

console.log(sizeOfMinValue([2, 4, 0, 9, 0, 0, 7, 2, 1, 4, 7, 9, 0, 8, 4]));
```

## 133

```jsx
const entriesOfCharc = charcArray.reduce((preVal, currval) => {
  preVal[currval] = preVal[currval] ? preVal[currval] + 1 : 1;
  return preVal;
}, {});
return entriesOfCharc;
```

## 134

```jsx
const isintg = (number) => (number % 1 === 0 ? true : false);
console.log(isintg(4.3));

const isintg = (num) => (String(num).includes(".") ? false : true);
console.log(isintg(4.3));
```

## 135

```jsx
const array = [1, 3, 3, 3, 1, 5, 6, 7, 8, 1];
console.log(array);
function filteredArray() {
const newArray = array.filter((numbers, indx, arr) => {
return arr.indexOf(numbers) = indx;
});
console.log(newArray)
}
filteredArray()

```

## 136

```jsx
const arr = [5, 7, 9, 6, 20].reduce(
  (preValue, currentValue) => preValue + currentValue,
  10
);
console.log(arr);
```

## 137

```jsx
const numbers = [2, 3, 5, 7, 9, 4, 6, 1, 8];
console.log(numbers);
const SortedNumbers = numbers.sort((a, b) => {
  if (a > b) {
    return 1;
  } else if (a === b) {
    return 0;
  } else {
    return -1;
  }
});
console.log(SortedNumbers);
```

## 138 Square star pattern

```jsx
let n = 5; // row or column count
// defining an empty string
let string = "";

for (let i = 0; i < n; i++) {
  // external loop
  for (let j = 0; j < n; j++) {
    // internal loop
    string += "*";
  }
  // newline after each row
  string += "\n";
}
// printing the string
console.log(string);
output:
  *****
  *****
  *****
  *****
  *****
```

## 139 Hollow square pattern

```jsx
let n = 5; // row or column count
// defining an empty string
let string = "";

for (let i = 0; i < n; i++) {
  // external loop
  for (let j = 0; j < n; j++) {
    // internal loop
    if (i === 0 || i === n - 1) {
      string += "*";
    } else {
      if (j === 0 || j === n - 1) {
        string += "*";
      } else {
        string += " ";
      }
    }
  }
  // newline after each row
  string += "\n";
}
// printing the string
console.log(string);

*****
*   *
*   *
*   *
*****
```

## 140 Right triangle pattern

```jsx
let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {
  // printing spaces
  for (let j = 0; j < n - i; j++) {
    string += " ";
  }
  // printing star
  for (let k = 0; k < i; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);
    *
   **
  ***
 ****
*****
```

## 141 Left triangle pattern

```jsx
let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);
*
**
***
****
*****
```

## 142 Downward Triangle Star

```jsx
let n = 5;
let string = "";
for (let i = 0; i < n; i++) {
  // printing star
  for (let k = 0; k < n - i; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);
*****
****
***
**
*
```

## 143 Hollow Triangle Star

```jsx
let n = 6;
let string = "";

for (let i = 1; i <= n; i++) {
  // printing star
  for (let j = 0; j < i; j++) {
    if (i === n) {
      string += "_";
    } else {
      if (j == 0 || j == i - 1) {
        string += "_";
      } else {
        string += " ";
      }
    }
  }
  string += "\n";
}
console.log(string);
*
**
* *
*  *
*   *
******
```

## 145 pyramid pattern

```jsx

let n = 5;
let string = "";
// External loop
for (let i = 1; i <= n; i++) {
// printing spaces
for (let j = 1; j <= n - i; j++) {
string += " ";
}
// printing star
for (let k = 0; k < 2 _ i - 1; k++) {
string += "_";
}
string += "\n";
}
console.log(string);
    *
   ***
  *****
 *******
*********
```

## 146 Reversed pyramid star

```jsx
let n = 5;
let string = "";
// External loop
for (let i = 0; i < n; i++) {
// printing spaces
for (let j = 0; j < i; j++) {
string += " ";
}
// printing star
for (let k = 0; k < 2 _ (n-i) - 1; k++) {
string += "_";
}
string += "\n";
}
console.log(string);
*********
 *******
  *****
   ***
    *
```

## 147 Hollow pyramid star

```jsx
let n = 5;
let string = "";

// External loop
for (let i = 1; i <= n; i++) {
// printing spaces
for (let j = 1; j <= n - i; j++) {
string += " ";
}
// printing star
for (let k = 0; k < 2 _ i - 1; k++) {
if(i === 1 || i === n) {
string += "_";
}
else {
if(k === 0 || k === 2 _ i - 2) {
string += "_";
}
else {
string += " ";
}
}
}
string += "\n";
}
console.log(string);
    *
   * *
  *   *
 *     *
*********

```

## 148 Diamond pattern

```jsx
let n = 5;
let string = "";
// Upside pyramid
for (let i = 1; i <= n; i++) {
// printing spaces
for (let j = n; j > i; j--) {
string += " ";
}
// printing star
for (let k = 0; k < i _ 2 - 1; k++) {
string += "_";
}
string += "\n";
}
// downside pyramid
for (let i = 1; i <= n - 1; i++) {
// printing spaces
for (let j = 0; j < i; j++) {
string += " ";
}
// printing star
for (let k = (n - i) _ 2 - 1; k > 0; k--) {
string += "_";
}
string += "\n";
}
console.log(string);
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
```

## 149 Hollow diamond pattern

```jsx
let n = 5;
let string = "";
// Upside pyramid
// upside diamond
for (let i = 1; i <= n; i++) {
// printing spaces
for (let j = n; j > i; j--) {
string += " ";
}
// printing star
for (let k = 0; k < i _ 2 - 1; k++) {
if (k === 0 || k === 2 _ i - 2) {
string += "_";
}
else {
string += " ";
}
}
string += "\n";
}
// downside diamond
for (let i = 1; i <= n - 1; i++) {
// printing spaces
for (let j = 0; j < i; j++) {
string += " ";
}
// printing star
for (let k = (n - i) _ 2 - 1; k >= 1; k--) {
if (k === 1 || k === (n - i) _ 2 - 1) {
string += "_";
}
else {
string += " ";
}
}
string += "\n";
}
console.log(string);
    *
   * *
  *   *
 *     *
*       *
 *     *
  *   *
   * *
    *
```

## 150 Hourglass star pattern

```jsx
let n = 5;
let string = "";
// Reversed pyramid pattern
for (let i = 0; i < n; i++) {
// printing spaces
for (let j = 0; j < i; j++) {
string += " ";
}
// printing star
for (let k = 0; k < (n - i) _ 2 - 1; k++) {
string += "_";
}
string += "\n";
}
// pyramid pattern
for (let i = 2; i <= n; i++) {
// printing spaces
for (let j = n; j > i; j--) {
string += " ";
}
// printing star
for (let k = 0; k < i _ 2 - 1; k++) {
string += "_";
}
string += "\n";
}
console.log(string);
*********
 *******
  *****
   ***
    *
   ***
  *****
 *******
*********
```

## 151 Right pascal star pattern

```jsx
let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    string += "_";
  }
  string += "\n";
}
for (let i = 1; i <= n - 1; i++) {
  for (let j = 0; j < n - i; j++) {
    string += "_";
  }
  string += "\n";
}
console.log(string);
*
**
***
****
*****
****
***
**
*
```

## 152 Left pascal star pattern

```jsx
let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < n - i; j++) {
    string += " ";
  }
  for (let k = 0; k < i; k++) {
    string += "_";
  }
  string += "\n";
}
for (let i = 1; i <= n - 1; i++) {
  for (let j = 0; j < i; j++) {
    string += " ";
  }
  for (let k = 0; k < n - i; k++) {
    string += "_";
  }
  string += "\n";
}
console.log(string);
    *
   **
  ***
 ****
*****
 ****
  ***
   **
    *
```

## 153 Heart Star Pattern

```jsx
var n = 6;
var str = "";
for (let i = n / 2; i < n; i += 2) {
// print first spaces
for (let j = 1; j < n - i; j += 2) {
str += " ";
}
// print first stars
for (let j = 1; j < i + 1; j++) {
str += "_";
}
// print second spaces
for (let j = 1; j < n - i + 1; j++) {
str += " ";
}
// print second stars
for (let j = 1; j < i + 1; j++) {
str += "_";
}
str += "\n";
}
// lower part
// inverted pyramid
for (let i = n; i > 0; i--) {
for (let j = 0; j < n - i; j++) {
str += " ";
}
for (let j = 1; j < i _ 2; j++) {
str += "_";
}
str += "\n";
}
console.log(str);
 ***   ***
***** *****
***********
 *********
  *******
   *****
    ***
     *
```
