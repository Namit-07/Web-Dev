const { error } = require("console");
const fs = require("fs");
// const fs = require("fs/promises")

console.log("starting");
// fs.writeFileSync("namit.txt", "Namit is a good boy");

fs.writeFile("namit2.txt", "Namit is a good boy2", ()=>{
    console.log("done")
    fs.readFile("namit2.txt", (error, data)=>{
        console.log(error, data.toString())
    })
})

fs.appendFile("namit2.txt", "namitrobo", (e, d)=>{
    console.log(d)
})
console.log("ending");  