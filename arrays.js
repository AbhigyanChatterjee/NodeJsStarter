let arr = [];

for(let i = 0; i < 10; i++) {
    arr.push(i);
}
// let array = [11, 13, 14];
// arr.push(array);
// console.log(arr);
// console.log(arr[10][0] + arr[10][1]);

// push - add to last
// unshift - add at the start
// pop - last out
// shift - first out
// slice  - subArr(fromInd, (to + 1)Ind)
// splice - delete(fromInd, no of deletions ? if value <= 0 || value > size - ind then auto adjustment of deletions);
arr.push("Hey last ele");
console.log(arr);
arr.unshift("Hey first ele");
console.log(arr);
arr.pop();
console.log(arr);
arr.shift();
console.log(arr);

let subArr = arr.slice(1, 6);
console.log(subArr);
// arr.splice(1, -10);
// arr.splice(1, 19);
arr.splice(1,)
console.log(arr);
console.log(arr.indexOf(0));
console.log(arr.includes(13));

