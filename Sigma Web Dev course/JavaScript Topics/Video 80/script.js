// let obj = {
//     a: 1,
//     b: "Namit"
// }

// console.log(obj)

// let animal = {
//     eats: true
// };
// let rabbit = {
//     jumps: true
// };

// rabbit_proto = animal;  sets rabbit>[[Prototype]] = animal

class Animal{
    constructor(){
        console.log("Object is created...");
        
    }
    eats(){
        console.log("Kha rha hoon");
    }
    jumps(){
        console.log("Kood rha hoon");
    }
}

class Lion extends Animal{
    constructor(name){
        super(name)
        this.name = name;
        console.log("Object is created and he is a lion...");
        
    }
    eats(){
        console.log("Kha raha hoon roar")
    }
}

let a = new Animal("Bunny");
console.log(a);

let l = new Lion("Shera");
console.log(l);