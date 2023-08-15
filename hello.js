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

