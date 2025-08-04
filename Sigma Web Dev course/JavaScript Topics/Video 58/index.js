function nice(name) {
    console.log("Hey " + name + " you are nice!")
    console.log("Hey " + name + " you are good!")
    console.log("Hey " + name + " your tshirt is nice!")
    console.log("Hey " + name + " your course is good too!")
}

function sum(a, b, c = 3) {
    // console.log(a + b)
    console.log(a, b, c)
    return a + b + c
}

nice("Namit")

result = sum(3, 5)

console.log("The sum of these numbers is: ", result)

const func1 = (x)=>{
    console.log("I am a arrow function", x)
}

func1(34);
func1(66);
func1(84);