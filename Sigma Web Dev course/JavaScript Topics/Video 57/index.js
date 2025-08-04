console.log("I am a tutorial on Loops")

let a = 1;
// console.log(a)
// console.log(a+1)
// console.log(a+2)

for (let i = 0; i < 100; i++) {
    console.log(a + i);
 
}

let obj = {
    name: "Namit",
    role: "Programmer",
    company: "RaMeNa .AI",
}

for (const key in obj) {
        const element = obj[key];
        console.log(key, element)
}

for (const c of "Namit") {
    console.log(c) 
    
}

// let i = 0;
// while (i < 6) {
//     console.log(i);
//     i++;
// }

let i = 0;
do {
    console.log(i);
    i++;
} while (i<6);