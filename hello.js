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
let p1 = new Promise((resolve,reject)=>{

        console.log("promise pending...");
         resolve(console.log("p1 promise resolved")); 
        //reject(true);

        
    });

    p1.then(()=>{
        console.log("this is then p1");
        let p2 = new Promise((resolve,reject)=>{
            reject(console.log("p2 not fulfilled"));
        }); 
    }).then(()=>{
        console.log("this is p2 then");
    }).catch(()=>{
        console.log("error");
    })