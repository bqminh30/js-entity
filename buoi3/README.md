?? va ||
let user = "Minh";
let \_user;
alert(user ?? "Quang");
alert(\_user ?? "Quang");

====================
Loops: while and for
while (condition) {
// code
}

let i = 0;
while (i < 3) {
console.log( i );
i++;
}

let i = 3;
while (i) {
console.log( i );
i--;
}

OR

let i = 0;
do {
console.log( i );
i++;
} while (i < 3);

for ( i = 0; i < 3; i++ ) {

}

switch (i) {
case 0:
...
break;
case 1:

    default:
        ...
        break;

}

function

function checkAge(age) {
if (age >= 24) {
return true;
} else {
return false
}
}

let age = prompt('How old are you?', 18);
if(checkAge(age)){
console.log('Minh)
}else {
console.log('Thuy)
}

function sum(a,b) {
return a + b
}

let sum = function(a,b) {
return a + b
}

sayHi("Minh");

function sayHi(name) {
alert( `Hello, ${name}` );
}

sayHi("Quang"); //

let sayHi = function(name) {  
 alert( `Hello, ${name}` );
};

// Arrow func
let func = () => {

}

so sánh arrow func va func declaration
