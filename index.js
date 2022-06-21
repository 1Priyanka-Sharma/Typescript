console.log("Hello World");
var age = 20;
// let age=20;      //Will work fine.
var sales = 2000123450;
var course = 'Priyanka';
var answer = true;
var level; //any type-always avoid
level = 1;
level = 'a';
function readMe(doc) {
    console.log(doc);
}
var fArray = []; //to retain type checking
var numbers = [1, 2, '3', 9]; //makes typechecking void-avoid using 
var sArray = []; //makes typechecking void-avoid using 
sArray[0] = 'a';
sArray[1] = 1;
// Tuples- avoid using them -hard to understand other developers
var user = [1, 'Priya'];
user.push('kalo', 21, 'Hey'); //This should create problem but doesn't do it.
// Enums-PascalCase -if we run this code, complier will generate complicated code. To avoid so, use const keyword with it
var Size;
(function (Size) {
    Size[Size["Small"] = 0] = "Small";
    Size[Size["Medium"] = 1] = "Medium";
    Size[Size["Large"] = 2] = "Large";
})(Size || (Size = {})); //Small,Medium and Large will automatiely take 0,1,2 respectively.
var SkirtSize;
(function (SkirtSize) {
    SkirtSize["Small"] = "s";
    SkirtSize["Medium"] = "m";
    SkirtSize["Large"] = "l";
})(SkirtSize || (SkirtSize = {})); // we have to mention all thre if taking 'string'.
var mySize = 2 /* ShirtSize.Medium */;
