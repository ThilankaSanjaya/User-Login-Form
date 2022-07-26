//console.log("Hello World"); 
//console.error('This is an error');
//console.warn('This is a warn');


//Variables-var let const

/*let age=30;
age = 31; 
console.log(age);

let score;
score=10;
console.log(score);
*/

//DataTypes-String Numbers Boolean Null Undefined
/*
const name = "Thilanka";
const age = 10;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;

console.log(typeof name);
console.log(typeof age);
console.log(typeof rating);
console.log(typeof isCool);
console.log(typeof x);
console.log(typeof y);
console.log(typeof z);

//Concatanation

console.log('My name is '+name+'.My age is '+age+'.'); 

//Template String
console.log(`My name is ${name} and I am ${age} years onload.`);

*/

/*
const s='Hello World!';

console.log(s.length);//12
console.log(s.toUpperCase());//HELLO WORLD!
console.log(s.toLowerCase());//hello world!
console.log(s.substring(0,5).toUpperCase());//HELLO
console.log(s.split(''));
*/

//Array - variables that hold multiple values

/*const numbers = new Array(1,2,3,4,5);
console.log(numbers);

const fruits = new Array("Apple","Banan","Pears");
console.log(fruits);
console.log(fruits[2]);

fruits[3] = 'Grapes';
console.log(fruits);

fruits.push('mango');
*/

//For
/*
for(let i=0; i<=10; i++){
    console.log(i);
    console.log(`For loop number :${i}`);
}
*/

//While loop
let i=0;
while(i<=10){
    console.log(`while loop number is : ${i}`);
    i++

};

//for each, map ,filter

//Constructor functions
function person(firstname,lastname,dob){
    this.firstname = firstname;
    this.lastname = lastname;
    this.dob = new Date(dob);

    this.getBirthYear = function(){
        return this.dob.getFullYear();
    }

    this.getFullName = function(){
        return `${this.firstname} ${this.lastname}`;
    }

}

//Instantiate object
const person1 = new person('John','Doe','4-3-1980');
const person2 = new person('Mary','Smith','4-3-1983');

console.log(person1);
console.log(person2.firstname);

console.log(person1.getBirthYear());
console.log(person2.getFullName());