function sum(x, y) { 
    return x + y; 
}
console.log(sum(6, 9));


// Function Definition
function welcomeMsg(name) {
    return ("Hello " + name + " welcome to kfcforburger");
}

let nameVal = "User";

// calling the function
console.log(welcomeMsg(nameVal));



const a = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

const a2 = a.map(function (s) {
    return s.length;
});

console.log("Normal way ", a2);

const a3 = a.map((s) => s.length);

console.log("Using Arrow Function ", a3);