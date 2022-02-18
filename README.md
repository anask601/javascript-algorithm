# javascript-algorithm

1 print 20 event no. not start from zero

```jsx
const num = [];
for (let i = 0; i <= 20; i++) {
  //
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
