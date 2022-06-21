console.log("Hello World");

let age: number = 20;
// let age=20;      //Will work fine.

let sales: number = 2_000_123_450;
let course: string = "Priyanka";
let answer: boolean = true;
let level; //any type-always avoid
level = 1;
level = "a";

function readMe(doc: any) {
  console.log(doc);
}

let fArray: number[] = []; //to retain type checking
let numbers = [1, 2, "3", 9]; //makes typechecking void-avoid using

let sArray = []; //makes typechecking void-avoid using
sArray[0] = "a";
sArray[1] = 1;

// Tuples- avoid using them -hard to understand other developers
let user: [number, string] = [1, "Priya"];
user.push("kalo", 21, "Hey"); //This should create problem but doesn't do it.

// Enums-PascalCase -if we run this code, complier will generate complicated code. To avoid so, use const keyword with it
enum Size {
  Small,
  Medium,
  Large,
} //Small,Medium and Large will automatiely take 0,1,2 respectively.
const enum ShirtSize {
  Small = 1,
  Medium,
  Large,
} //Medium and Large will automatiely take 2 and 3 respectively.
enum SkirtSize {
  Small = "s",
  Medium = "m",
  Large = "l",
} // we have to mention all thre if taking 'string'.

let mySize: ShirtSize = ShirtSize.Medium;

// Specify return type-annotated form.  [number,void,...]
function calculateTax(income: number, taxYear?: number): void {
  let x;
  return;
}
// ?-make optional argument.
//pass defualt variable  taxYear=2022

// Objects
let employee: {
  id: number;
  name: string;
} = { name: "Anyonymous", id: 1 };

let company: {
  //it is allowed but should avoid as its conceptually wrong as every employee has name
  readonly id: number;
  name?: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  retire: (date: Date) => {
    console.log(date);
  },
};

// company.id=9;        -will result in error

// Type aliases-give a type a new name.
// probelm with above company object is that :-
//1-if we want to create another comapny object then whole same thing will be repeated.
//2-Some must have a property while other will not have it.non-uniformity will be created.

//Defined the shape of company and can be used many times.
type Company2 = {
  readonly id: number;
  name?: string;
  retire: (date: Date) => void;
};

let companyChild: Company2 = {
  id: 1,
  retire: (date: Date) => {
    console.log(date);
  },
};

//   Union Types- combining types -to use more than one data type for a variable or a function parameter.
let code: number | boolean;
code = 23;
code = false;

let emp: number | boolean = 45;

function greeting(message: number | string): number {
  // Narrowing-so that we can use more functions specific to type.
  if (typeof message === "number") {
    return message * 21;
  } else {
    return parseInt(message) * 21;
  }
}

greeting(24);
greeting("hello");

// Intersection types-combining types
let cost: number & string; //cost is both number and string simultaneously but its impossible. So, avoid this

type Draggable = {
  drag: () => void;
};

type Resizeable = {
  resize: () => void;
};

// We have to implement all methods of both type(Draggable an d Reaizeable)
type UIWidget = Draggable & Resizeable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};

// Literal types:exact/specific -to limit the value to a variable.
let quantity: number; //Then it can have any number

let qualitity: 50 = 50; //Then it can have any number
let qua: 50 | 100 = 50; //let qua: 50 | 100=100; -both are correct.

// Literal types
type Metric = "cm" | "inch";
let wireLength: Metric = "inch";

type Bottle = 12 | 23;
let milton: Bottle = 12;

// Nullable types
function greet(name: String | null | undefined) {
  if (name) console.log(name.toUpperCase());
  else console.log("HOLA!!");
}

greet(null); //If we do this w/o union operator in argument list -result in error
greet(undefined); //If we do this w/o union operator in argument list -result in error
greet("wow");

// optional chaining-optional operator access operator
type Customer = {
  birthday?: Date;
};

function getCustomerInfo(id: number): null | undefined | Customer {
  return id === 0 ? null : { birthday: new Date() };
}

let cust = getCustomerInfo(0);
console.log(cust?.birthday?.getFullYear());

// Optional element Access operator
// if(customers !== null && customers !== undefined)
        // customers[0]

// Instead of above 2 lines        
// customers?.[0]

// ooptional call
let log: any=null;
log?.('a'); //if its only a function then make a call.

