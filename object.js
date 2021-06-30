// object -> grp of key-value pair\

let cap = {
    firstName : "steve",
    lastName : "Rogers",
    age : 36,
    address : {
        city : "Manhattan",
        state : "New York",
        pin : 500032
    },
    movies : ["First avenger", "Winter Soldier", "Civil War"], 
    isAvenger : true,
    sayHi : function() {
        console.log("Hello from Cap!!");
    }
};

console.log(cap.firstName + "   " + (cap.address.pin * 2));
console.log(cap.movies[0] + "    " + cap.movies[1]);
cap.sayHi();
    
// SET : 
// UPDATE : 

cap.firstName = "Abhigyan";
cap.friends = ["Bucky Barnes", "Bruce Banner", "Tony Stark"];
console.log(cap);
delete cap.age;
console.log(cap);
for(let i in cap) {
    console.log(i, " : " , cap[i]);
}
let propKey = "address";
console.log(cap[propKey]);