// function greet(name){
//     return `hello ${name}`;
// }

// console.log(greet("John"))

// const greet = function(name){
//     return `hello ${name}`;
// }

const foodPromise = new Promise((resolve, reject) => {
    console.log("Cooking...");
    setTimeout(() => {
        resolve("Food is ready!"); // Call resolve if successful
        reject("Kitchen is closed!"); // Call reject if something goes wrong
    }, 2000);
});

foodPromise
    .then(message => console.log(message)) // Output after 2 seconds: Food is ready!
    .catch(error => console.error(error)); // Handles errors if reject is called