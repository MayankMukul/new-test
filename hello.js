// console.log("Hello");
// let arr = [34,43,45,65];
// console.log(Array.from(arr));

//practice problem
//let a = [2,3,4,6];
//console.log(a);
// let element = prompt('enter a number');
// element = Number.parseInt(element)
// arr.push(element);
// console.log(arr);

// Practice problem 
//insert element in array or 0 to exit
// let element;
// while(element !== 0){
//     element = prompt('enter a number');
//     element = Number.parseInt(element)
//     arr.push(element);
// } 
// console.log(arr);

//Practise Problem 
// let a = [2,3,4,6,45,98,34,76,7];
// console.log(a);
// let n = a.filter((a)=>{
//     return a>10 ;
// })
// console.log(n);

//Practise Problem 
// let a = [2,3,4,6,45,98,34,76,7];
// console.log(a);
// let n = a.map((a)=>{
//     return a*a ;
// })
// console.log(n);


//Practise Problem 
// let a = [2,3,4,5,6,7];
// console.log(a);
// let n = a.reduce((a,b)=>{
//     return a*b ;
// })
// console.log(n);

//Practise Problem 
// let playagain = true;
// while(playagain){
//     let age = prompt("Please enter your age ");
//     if (age<=18 && age>0){
//         alert("you can not drive");
//     }else if (age>18) {
//         alert("you can drive");
//     }else if (age<=0){
//         console.error("enter a valid age");
//         break;
//     }
//     playagain = confirm("do you want to play again")
// }

//Practise problem 
// alert("do you want to redirected to google");
// if(confirm("do you want to redirect to google")){
//     location.href=("https://www.google.com/");
// }


//Practise navbar
// document.querySelector("ul").firstElementChild.style.color="red"; 
// document.querySelectorAll("li")[2].style.backgroundColor="blue";

//Practise Toggle
// function bulb1(){
//     let toggle = document.querySelector("#bulb1");
//     toggle.classList.toggle("toggle1");
// }
// function bulb2(){
//     let toggle = document.querySelector("#bulb2");
//     toggle.classList.toggle("toggle2");
// }
// function bulb3(){
//     let toggle = document.querySelector("#bulb3");
//     toggle.classList.toggle("toggle3");
// }

// setInterval(bulb1,500);
// setInterval(bulb2,500);
// setInterval(bulb3,500);

//Promises 

// let p1 = new Promise((resolve,reject)=>{

//     console.log("promise pending...");
//      resolve(true); 
//     //reject(true);
// });

// let p2 = new Promise((resolve,reject)=>{

//     console.log("promise pending...");
//     // resolve(true); 
//     reject(true);

// });

// p1.then(()=>{
//     console.log("promise fulfilled");
// })

// // p2.catch(()=>{
// //     console.log('Promise rejected');
// // })


// p2.then(()=>{
//     console.log("promise fulfilled");
// },()=>{
//     console.log('Promise rejected');
// })

//practise promise chaining
// let p1 = new Promise((resolve,reject)=>{

//         console.log("promise pending...");
//         resolve(console.log("p1 promise resolved")); 
//         //reject(true);   
    
//     });


// p1.then(()=>{
//         console.log("this is then p1");
//     let p2 = new Promise((resolve,reject)=>{
//             reject(console.log("p2 not fulfilled"));
//         }); 

//         return p2;

//     }).then(()=>{
//         console.log("this is p2 then");
//     }) .catch(()=>{
//         console.log("error");
//     });

    //promise api

    // let p1 = new Promise( (resolve,reject)=>{
    //     //resolve(console.log("resolved  1"+"value1"));
    //     reject(console.log("reject  1"+"value1"));
    // })
    // let p2 = new Promise( (resolve,reject)=>{
    //     //resolve(console.log("resolved  2"+"value1"));
    //     reject(console.log("rejected  2"+"value2"));
    // })
    // let p3 = new Promise( (resolve,reject)=>{
    //     resolve(console.log("resolved  3"+"value3"));
    // })
    
    // p1.then((value)=>{
    //     console.log("done 1 "+value);
    // });
    // p2.then((value)=>{
    //     console.log("done 2 "+value);
    // });
    // p3.then((value)=>{
    //     console.log("done 3 "+value);
    // });

    // let promiseall= Promise.all([p1,p2,p3]);  //return array of all the promises
    // let promiseall= Promise.allSettled([p1,p2,p3]); //return all resolved array
    // let promiseall= Promise.race([p1,p2,p3]); //return the promise which gets executed fastest
    // let promiseall= Promise.any([p1,p2,p3]); //return the promise which gets executed fastest and is resolved
    // let promiseall= Promise.resolve("4"); //return the promise which is resolved
//     let promiseall= Promise.reject(new Error ("error occurred")); //return the promise is rejected
//     promiseall.then((value)=>{
//         console.log(value);
// })


//async and await

// async function waiting () {

//     let p1 = new Promise((resolve,reject)=>{
//         setTimeout (()=> {
//             console.log('promise 1 pending');
//             resolve("over 1");
        
//         },1000);
//     })

//     let p2 = new Promise((resolve,reject)=>{
//         setTimeout (()=> {
//             console.log('promise 2 pending');
//             resolve("over 2");
        
//         },3000);
//     })
    
//     console.log("p1 start");
//     let promise1 = await p1; //promise1 waits for the p1 value
//     console.log(promise1+" P1 over");
//     console.log(" P2 start");
//     let promise2 =await p2;
//     console.log(promise2+" P2 over");


//     return [promise1,promise2];
// }

// let result = waiting();

// result.then((value)=>{
//     console.log(value);
// })
// let another = ()=>{
//     console.log("this function does not wait");      //this function does not wait 
// }
// console.log(another());
// console.log("end");


//try catch

// console.log("one");
// console.log("two");
// console.log("three");
// console.log("four");
// console.log("five");

// try {                       //try catch does not work with async code eg - setinterval . It does not work with it.
//     console.log(abc)        //as abc is not defined it produces error but since it is written in try block the code does not get stop or hault and continues to the catch part
// } catch {
//     console.log("error occurred"); //the catch part is only executed when thier is error present in the try section
// }

// console.log("six");
// console.log("seven");
// console.log("eight");
// console.log("nine");
// console.log("ten");

//error meassage

// try {
//  //console.log(abc);
//  throw new ReferenceError("can be used to throw error"); //used to throw new error
// } catch (error){
//     console.log(error.name);
//     console.log(error.message);
//     console.log(error.stack)
// }
// finally{
//     console.log("over");    //this code runs after try and catch and gets executed even if catch is having any error 
// }

//practise problem
// function load(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {

//             resolve('data')
//         },2000);
//     })
// }

// let p1=load();
// p1.then((value)=>{
//     console.log("done " + value);
// });

//practise Problem
// async function p1(){
//         return new Promise((resolve,reject)=>{
//             setTimeout(() => {
//                 resolve('p1')
//             },1000);
//         })
//     };
// async function p2(){
//         return new Promise((resolve,reject)=>{
//             setTimeout(() => {
//                 resolve('p2')
//             },2000);
//         })
//     };
// async function p3(){
//         return new Promise((resolve,reject)=>{
//             setTimeout(() => {
//                 resolve('p3')
//             },3000);
//         })
//     };

//take more time as it wait for particularly every promise to finish and then moves to next step
// async function load (){
//     console.time("run");
//     console.log("starting...")
//     let n1 = await p1();   //waits for Promise p1 ie for 1 sec
//     let n2 = await p2();     //waits for Promise p2 ie for  2 sec
//     let n3 = await p3();     //waits for Promise p3 ie for 3 sec   and the total program has to wait for 6sec
//     console.log(n1,n2,n3);
//     console.timeEnd("run");
// }

//in this function the promises get get trigred or are started all at one go function waits to store all the promises result
// async function load (){
//     console.time("run");
//     console.log("starting...")
//     let n1 =  p1();             //starts all the promises
//     let n2 =  p2();
//     let n3 =  p3();

//     let n1n2n3 = await Promise.all([n1,n2,n3]); //waits for all the problem to end
//     console.log(n1n2n3);
//     console.timeEnd("run");
// }

// load();

//fetch api

// let url = fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m");
// //getting response of a fetch is a two way process thats why we use two then

// url.then((value)=>{     //it gets the response if it is received or not
//     console.log(value.status);
//     console.log(value.ok);
//     return value.json();
//     //return value.text();  //after fetch the response  is in two form json and text but only one can be used. Either json or text can be used.
// }).then((value=>{       //it is another step in which the body of response is accessed
//     console.log(value);
//     return value;
// }))

//get request 
// a get request has all its information in url and thus have some limit as information can be sent till a certain limit
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))

//post request 
// a post request is used when we have to send the data to the server. Like adding item to cart the detail of items are send to the server to store the information
//syntax fetch('https request',{options});
// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify({
//     title: 'foo',
//     body: 'bar',
//     userId: 2,
//   }),
//   headers: {
//     'Content-type': 'application/json',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// cookies 
// console.log(document.cookie);
// document.cookie = 'key=value';
// console.log(document.cookie);
// document.cookie = 'greet=hello';
// console.log(document.cookie); //it adds new key value pair in cookie
// document.cookie = 'key=newValue';
// console.log(document.cookie);
// let key = "a@d";   //to store this type as input we encrypt the value
// let value = "v@lue";
// document.cookie=`${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
// console.log(document.cookie);
// // to decode these value we use decodeURIComponent()
// console.log(encodeURIComponent(key));
// console.log(decodeURIComponent(key));

//local storage
// let key = "key";
// let value = "value for key";

// localStorage.setItem(key,value);

// console.log(`the value at ${key } is ${localStorage.getItem(key)}`);

// localStorage.removeItem(key);
// localStorage.clear();
// localStorage.length;
// localStorage.index(0..n);

//session storage
// let key1="key_one" ;
// let valu1 ="value one ";
// sessionStorage.setItem(key1,valu1 );
// window.onstorage= ()=>{         //works for localStorage
//     alert("storage updated");
// };

//constructor functuion

// class Car {
//     constructor( name , color) {//this keyword refers to class object
//         console.log(`constructor runs every time class is used`);
//         console.log('object created using constructor function ');
//         this.name = name;
//         this.color = color;
//         console.log(`${name} of ${color} color`);
//         }

//     carrunning(){
//         console.log(`car is running`);
//     }

//     anotherfunction(){
//         console.log (`another function called from car class `);
//     }
// }

// const a = new Car("abc","xyz") ;
// a.carrunning();
// a.anotherfunction();

// //creating a child class for car

// class Nano extends Car {
//     //parent class constructor gets called automatically
//     constructor (name,color,year){
//         //this.year;        //this can not be used before super
//         super (name,color);//calling parent class constructor with arguments passed in
//         //this.year;          //here this can be used
//         console.log (`the year for the car is ${year}`);
//         console.log ('child class constructor');
//     }

//     nanoFunction (){
//         console.log ("nano function called ");
//     }
// }

// let nanocar = new Nano("TataNano","Red","2010") ;
// nanocar .nanoFunction ();

// console.log("creating new object using class")
// let newcar = new Car("ford","black");


//static Method
// class Car {
//     constructor(name) {
//       this.name = name;
//       console.log(this.name);
//     }
//     static hello(x) {
//       return "Hello " + x.name;
//     }
//   }
//   const myCar = new Car("Ford");
//   console.log(Car.hello(myCar));    //static method is called by class name
//   console.log(Car.hello("car"));

// myCar.hello("ford");  // static method connot be called by this


//Practise question 

// class Complex {
//     constructor(r,i) {
//         console.log('constructor of complex number');
//         console.log(`real part: ${r} imaginary part :${i}`);
//         console.log(`complex number ${r}+i${i}`);
//         this.real=r;
//         this.imaginary = i;
//     }

//     add(num){
//         this.real=this.real+num.real;
//         this.imaginary=this.imaginary+num.imaginary
//     }

//     get getrealimaginary(){
//         return {
//             'real' : this.real,
//             'imaginary' : this.imaginary};
//     }

//     set setreal(newreal){
//        return this.real=newreal;
//     }

//     set setimaginary(newimaginary){
//         return this.imaginary= newimaginary;
//     }

// }
// let c=new Complex(1,2);
// let d=new Complex(4,3);
// (c.add (d));//calling instance method on an object
// console.log(`${c.real} +${c.imaginary}i  `);

// console.log(d.getrealimaginary);

// let e = new Complex(6,6);
// console.log(e);
// e.setreal=(7);
// e.setimaginary=(7);
// console.log(e);


//Returning an object with function
// var expect = function(val) {
    
//     return {
//         toBe : (n)=> {
//             if(val === n){
//             return true
//         } else {
//             throw new Error('Not Equal')
//             }
//         },
//         notToBe : (n)=>{
//             if(val !== n){
//             return true
//         } else {
//             throw new Error("Equal")
//             }
//         }
//     }
// };
// console.log(expect(5).toBe(5)); // true
//  console.log(expect(5).notToBe(5)); // throws "Equal"

//iife 

// (()=>{
//     let a = 1;
//     console.log(`IIFE`,a);
//     console.log("variables declared here are not accessible outside this block")
// })()

// console.log(a);//cannot access a as it is inside iife

//destructuring

// let a, b, rest;
// [a, b] = [10, 20];

// console.log(a);

// console.log(b);

// [a, b, ...rest] = [10, 20, 30, 40, 50];

// console.log(rest);

// Spread syntax
function sum(x,y,z,a,b,c,) {
    return x+y+z+a+b+c;
  }
  
  const numbers = [1,2,3,4,5,6];
  
  console.log(sum(...numbers));
  console.log(...numbers);


  // scope 1.Local 2.function 3.Global
  //hoisting - using the function and the variable before they are initialized
  //closuers - a function along with its lexical scope
  //arrow function - ()=>{}  //can also be used as name => console.log(name);
