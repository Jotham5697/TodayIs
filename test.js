// fetch('/login.html')
//     .then(response => {
// //         // You can handle the response here if needed
// //         // Once the request is complete, you can access the cookie
// //         const cookies = document.cookie;
// //         console.log(cookies); // Output: "username=john; <other cookies>"
// //     })
// //     .catch(error => {
// //         console.error('Error:', error);
// //     });


// let currentDate = new Date().toDateString();
// // let month = currentDate.getMonth(); 
// console.log(currentDate)
// // console.log(month)


const {createHash} = require('node:crypto'); 

function hash(string){
    return createHash('sha256').update(string).digest('hex');
}; 


let x = "treees"; 
let y = "treees"; 

console.log(hash(x)!==hash(y));

let today = new Date("2024-03-19");

let today1 = new Date("2024-05-19").getTime();
console.log("today" + today)
console.log(today1)

// let difference = (today-today1) / (1000*60*60*24)

// console.log(difference);

console.log("inequality: " + today < today1); 

console.log(+ today);