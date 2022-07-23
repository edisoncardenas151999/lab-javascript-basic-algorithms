// Iteration 1: Names and Input

let hacker1 = edison;
console.log(`The driver's name is ${hacker1}`);
let hacker2 = cardenas;
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals
let hackerTotal = hacker1.length + hacker2.length
if(hacker1.length > hacker2.length){
    console.log(`The driver has longest name, it has ${hacker1.length} characters.`)
}
else if (hacker2.length > hacker1.length){
    console.log(` It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}
else {
    console.log(`Wow, you both have equally long names,${hackerTotal} characters!`)
}

// Iteration 3: Loops
for (let i=0; i < hacker1.length; i++){
    
}