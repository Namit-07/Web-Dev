import fs from "fs/promises"

let a = await fs.readFile("namit.txt")


let b = await fs.appendFile("namit.txt", "\n\n\n\nthis is amazing promise")
console.log(a.toString(), b)