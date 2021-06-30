console.log("Hello JS");
// variable declare
//Js only tells it's a variable not its type
let a = 5;
console.log('variable contains : ' , a * 10);
// primitive types - number, string, boolean, null

for(let i = 0; i < 10; i++)  console.log(i);
let num = 18;

function isPrime(num) {
    if((num % 2 == 0) || (num % 3 == 0)) return false;
    for(let i = 5; (i * i) <= num; i++) {
        if((num % i) == 0) return false;
    }
    return true;
}

console.log(isPrime(num));