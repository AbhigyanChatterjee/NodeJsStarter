//Non primitive -> arrays, obj, fxn
let str = 'Abhigyan Chatterjee'
function sayHi(str) {
    console.log("Hello "+ str + "!!! I hope you are staying safe");
}
sayHi(str);

let a = [3, -10, 14, 18, 20, -34];

function maxMin(a) {
    let max = -Infinity;
    let min = Infinity;
    for(let i = 0; i < a.length; i++) {
        if(a[i] > max) max = a[i];
        if(a[i] < min) min = a[i];
    }
    console.log('Maximum : ' + max);
    console.log('Minimum : ' + min);
}

maxMin(a);
console.log(Math.max.apply(null, a));
console.log(Math.min.apply(null, a));
// No return type
function multRet() {
    return Math.random() > 0.5 ? true : "Less than 0.5";
}

for(let i = 0; i < 10; i++) console.log(multRet());