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

```jsx
for (let i = 20; i >= 0; i--) {
  if (i === 0) {
    continue;
  }
  console.log(i);
  console.log("\n");
}
```

## Usage/Examples

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
