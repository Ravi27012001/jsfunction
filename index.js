console.log("working...");

// Create one function with zero parameter having a console statement;
function ravi() {
    console.log("my name is ravi");
}
ravi();

// Create one function which takes two values as a parameter and print the sum of them as "Sum of 3, 4 is 7"

let sum = function( a,b ){
    let c = a+b;
console.log("sum of "+ a +"and "+b+ "is" + c);
}

sum(3,4);

// Create one arrow function
hello = ()=>{
    console.log("hello bro");
}

hello();

// "Print output: 

var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
girl (); //undefined

// "P rint output:
var x = 21;
girl ();
console.log(x)
function girl() {
    console.log(x);
    var x = 20;
};//undefined,21

// // "Print output

// var x = 21;
// a();
// b();
// console.log(a);
// a = function() {
    
//    x = 20;
//   console.log(x);
// };
// b = function() {
    
//     x = 40;
//    console.log(x);
// };//a is not defined


function factorial(n){
    let a = 1;
    for(let i = 1;i<=n;i++){
      a = a * i;
    }
    console.log(a);
}
factorial(3);