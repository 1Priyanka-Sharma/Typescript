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

// Array
// let numbers = [1, 2, "3", 9]; //makes typechecking void-avoid using
let numbers:(number | string )[]  = [1, 2,  9,'j']; //makes typechecking void-avoid using
let num:[number,number,string,number] = [1, 2, "3", 9]; //makes typechecking void-avoid using

let sArray = []; //makes typechecking void-avoid using
sArray[0] = "a";
sArray[1] = 1;

let fArray: number[] = []; //to retain type checking

// Tuples- different  types array of fixed length.-avoid using them -hard to understand for other developers
let user: [number, string] = [1, "Priya"];
user.push("kalo", 21, "Hey"); //This should create problem but doesn't -so avoid
// variableName<Type> ={content:Type}

let obj<Type>={
  content:Type
}
obj<"Bird">

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
function calculateTax(income: number, taxYear=213): number {
  let x;
  console.log(taxYear?.toUpperCase());

  return null;
}
// Implicitly undefined-optional
// null and undefined.
// ?-make optional argument.
//pass defualt variable  taxYear=2022
let a:Date= null;
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
// let anyObj={}
company={
  id: 7,
  retire: (date: Date) => {
    console.log(date);
  },
}
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

// if(data instanceof Date)

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

let qualitity: 50 = 50; //Then it can't have any number
// qualitity=54;
let qua: 50 | 100 |67= 50; //let qua: 50 | 100=100; -both are correct.

// Literal types
type Metric = "cm" | "inch";
let wireLength: Metric = "inch";

type Bottle = 12 | 23;
let milton: Bottle = 12;

// Nullable types
function greet(name: String ) {
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
let aggee:number=log?.('a'); //if its only a function then make a call.


// TypeScript provides modules and namespaces in order to prevent the default global scope of the code and also to organize and maintain a large code base.
// Modules are a way to create a local scope in the file. So, all variables, classes, functions, etc. that are declared in a module are not accessible outside the module. A module can be created using the keyword export and a module can be used in another module using the keyword import.
// Import { export name } from "file path without extension"
export  let agee : number = 20;
export class Employee {
    empCode: number;
    empName: string;
    constructor(name: string, code: number) {
        this.empName = name;
        this.empCode = code;
    }
    displayEmployee() {
        console.log ("Employee Code: " + this.empCode + ", Employee Name: " + this.empName );
    }
}
// import * as Emp from "./Employee"
// import { Employee } from "./Employee";
// import abb from "./Employee";


// Classes  -template definition of the method s and variable s in a particular kind of object 
// type annotation is optional, but will be an implicit any if not specified.
class Point {
  x: number;
  y: number;
}

// Initializers
class Point {
  x = 0;
  y = 0;
}
// --strictPropertyInitialization-raise error if class fields are not initialized in the constructor.

// forget to initialize it in the constructor--definite assignment assertion(!)
class ArticleMeta {       //Error
  private wordsPerMinute!: number;
  private secondsPerImage: number;

  constructor(wordsPerMinute: number) {
      this.secondsPerImage = 15;
  }
}

// When you need to allow a property with no definite assignment, you can use the definite assignment assertion. This is a very grand name for adding a bang (!) to the property name.
class ArticleMeta {
    private wordsPerMinute!: number;
}

// readonly modifier. This prevents assignments to the field outside of the constructor.
// not inside class and also outside
class Greeter {
  readonly name: string = "world";
 
  constructor(otherName?: string) {
    if (otherName !== undefined) {
      this.name = otherName;
    }
  }
   err() {
    this.name = "not ok";
// Cannot assign to 'name' because it is a read-only property.
  }
}
const g = new Greeter();
g.name = "also not ok";

// Constructors can’t have return type annotations - the class instance type is always what’s returned
// Constructor Overloading
// avoid it
class Poiint {
  constructor(x: number, y: string);
  constructor(s: string);
  constructor(xs: any, y?: any) {
    // TBD
  }
}

// super()
class Base {
  k = 4;
}
 
class Derived extends Base {
  constructor() {
    // Prints a wrong value in ES5; throws exception in ES6
    super();
    console.log(this.k);
// 'super' must be called before accessing 'this' in the constructor of a derived class.
  }
}

// A function property on a class is called a method
// inside a method body, it is still mandatory to access fields and other methods via this
let x: number = 0;
 
class C {
  x: string = "hello";
 
  m() {
    // This is trying to modify 'x' from line 1, not the class property
    // x = "world";    //error
    this.x = "world";
// Type 'string' is not assignable to type 'number'.
  }
}

// Getters and setters->    --revise
// If get exists but no set, the property is automatically readonly
// If the type of the setter parameter is not specified, it is inferred from the return type of the getter
// Getters and setters must have the same Member Visibility
class Demo{
   x11=0;
  get de(){
    return this.x11;
  }
  set de(abc){
    this.x11= abc;
  }
}

// implements
interface Pingable {
  ping(): void;
}
 
class Sonar implements Pingable {
  ping() {
    console.log("ping!");
  }
}

// num.stringify()//5->"5"
 
class Ball implements Pingable {
// Class 'Ball' incorrectly implements interface 'Pingable'.
  // Property 'ping' is missing in type 'Ball' but required in type 'Pingable'.
  pong() {
    console.log("pong!");
  }
}

// class C implements A, B {...}


// TypeScript enforces that a derived class is always a subtype of its base class.
class Basse {
  greet() {
    console.log("Hello, world!");
  }
}
 
class Derivved extends Basse {
  greet(name?: string) {
    if (name === undefined) {
      super.greet();
    } else {
      console.log(`Hello, ${name.toUpperCase()}`);
    }
  }
}
 
// Alias the derived instance through a base class reference
const d = new Derivved();
d.greet("reader");

const b: Basse = d;
// No problem
b.greet();


// The order of class initialization, as defined by JavaScript, is:

// The base class fields are initialized
// The base class constructor runs
// The derived class fields are initialized
// The derived class constructor runs

// default visibility -public.- accessed anywhere:
// protected members are only visible to subclasses of the class they’re declared in
class Greetter {
  protected getName() {
    return "hi";
  }
}
 
class SpecialGreeter extends Greetter {
  public howdy() {
    // OK to access protected member here
    console.log("Howdy, " + this.getName());
  }
}
const g = new SpecialGreeter();
g.getName();    //error

// To Expose:-
 class Base {
  protected m = 10;
}
class Derived extends Base {
  // No modifier, so default is 'public'
  m = 15;
}
const d = new Derived();
console.log(d.m);

// To save-use protected in subclass.

class Base {
  protected x: number = 1;
}
class Derived1 extends Base {
  protected x: number = 5;
}
class Derived2 extends Base {
  f1(other: Derived2) {
    other.x = 10;
  }
  f2(other: Base) {
    other.x = 10;
// Property 'x' is protected and only accessible through an instance of class 'Derived2'. This is an instance of class 'Base'.
  }
}

// private
class Base {
  private x = 0;
}
const b = new Base();
// Can't access from outside the class
console.log(b.x);
// Property 'x' is private and only accessible within class 'Base'.

// Cross-instance private access -whether different instances of the same class may access each others’ private members. 
class A {
  private x = 10;
 
  public sameAs(other: A) {
    // No error
    return other.x === this.x;
  }
}

// private and protected are only enforced during type checking.
// in or simple property lookup-work
class MySafe {
  private secretKey = 12345;
}

const s = new MySafe();
// Will print 12345
console.log(s.secretKey);

// private also allows access using bracket notation during type checking. 
console.log(s["secretKey"]);
// Hard-private
"use strict";
class Dog {
    #barkAmount = 0;
    personality = "happy";
    constructor() { }
}

// Sataic Members-aren’t associated with a particular instance of the class. They can be accessed through the class constructor object itself:
// Static members are also inherited:
class Base {
  static getGreeting() {
    return "Hello world";
  }
}
class Derived extends Base {
  myGreeting = Derived.getGreeting();
}

 static name = "S!";
// Static property 'name' conflicts with built-in property 'Function.name' of constructor function 'S'.

// Why No Static Classes?
// Unnecessary "static" class
class MyStaticClass {
  static doSomething() {}
}
 
// Preferred (alternative 1)
function doSomething() {}
 
// Preferred (alternative 2)
const MyHelperObject = {
  dosomething() {},
};

// Stataic Blocks-access private
class Foo {
  static #count = 0;

  get count() {
      return Foo.#count;
  }

  static {
      try {
          const lastInstances = loadLastInstances();
          Foo.#count += lastInstances.length;
      }
      catch {}
  }
}

// Generic classes
class Box<Type> {
  contents: Type;
  constructor(value: Type) {
    this.contents = value;
  }
}
 
const b = new Box("hello!");
     
const b: Box<string>

// static members of a generic class can never refer to the class’s type parameters.
class Box<Type> {
  static defaultValue: Type;
// Static members cannot reference class type parameters.
}

// this keyword
// value of this inside a function depends on how the function was called
class MyClass {
  name = "MyClass";
  getName() {
    return this.name;
  }
}
const c = new MyClass();
const obj = {
  name: "obj",
  getName: c.getName,   //this->obj ->"obj"
};
 
// Prints "obj", not "MyClass"
console.log(obj.getName());

// Arrow Functions
class MyClass {
  name = "MyClass";
  getName = () => {
    return this.name;
  };
}
const c = new MyClass();
const g = c.getName;
// Prints "MyClass" instead of crashing
console.log(g());

// This will use more memory, because each class instance will have its own copy of each function defined this way

// function definition, an initial parameter named this has special meaning in TypeScript. These parameters are erased during compilation:
function fn(this: SomeType, x: number) {
  /* ... */
}
Try
// JavaScript output
function fn(x) {
  /* ... */
}

// Only one function per class definition gets allocated, rather than one per class instance
























