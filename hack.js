let first = document.querySelector(".firstRow");
let second = document.querySelector(".secondRow");
let third = document.querySelector(".thirdRow");
let fourth = document.querySelector(".fourthRow");
let fifth = document.querySelector(".fifthRow");
let sixth = document.querySelector(".sixthRow");

async function hack(){

    let l1 = new Promise((resolve,reject)=>{
        return setTimeout(() => {
           resolve( `Welcome initializing the hack program`);
        }, 1000);
    })
    let l2 = new Promise((resolve,reject)=>{
        return setTimeout(() => {
            resolve( `finding the usser name`);
        }, 2000);
    })
    let l3 = new Promise((resolve,reject)=>{
        return setTimeout(() => {
            resolve(`username found`);
        }, 3000);
    })
    let l4 = new Promise((resolve,reject)=>{
        return setTimeout(() => {
            resolve( `getting acces`);
        }, 4000);
    })
    let l5 = new Promise((resolve,reject)=>{
        return setTimeout(() => {
            resolve( `access breached `);
        }, 5000);
    })
    let l6 = new Promise((resolve,reject)=>{
        return setTimeout(() => {
            resolve( `downloading data......`);
        }, 6000);
    })
    
    let o1 = await l1;
    first.innerHTML=o1;
    let o2 = await l2;
    second.innerHTML=o2;
    let o3 = await l3;
    third.innerHTML=o3;
    let o4 = await l4;
    fourth.innerHTML=o4;
    let o5 = await l5;
    fifth.innerHTML=o5;
    let o6 = await l6;
    sixth.innerHTML=o6;
    
}

hack();