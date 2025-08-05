console.log("This is strings tutorial")
let a = "Namit";
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
// console.log(a[5]);

console.log(a.length);

let real_name = "Namit";
let friend = "Gopal";
console.log("My name is " + real_name + " and my friend's name is " + friend);
console.log(`My name is ${real_name} and my friend's name is ${friend}`);

let b = "Shivam";
console.log(b.toUpperCase());
console.log(b.toLowerCase());
console.log(b.length);
console.log(b.slice(1, 5)); // --> 1 is included and 5 is excluded

console.log(b.replace("Sh", "Na")) // --> Only first occurence is replaced not the following occurence 
console.log(b.concat(a, "Aishwarya", "Rahul", friend));
