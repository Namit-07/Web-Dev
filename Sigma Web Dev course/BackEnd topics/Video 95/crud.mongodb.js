// CRUD Operations
use("CrudDb")

db.createCollection("courses")

// db.courses.insertOne({
//     name: "Harrys web dev free course",
//     price: 0,
//     assignments: 12,
//     projects: 45,
// })

// db.courses.insertMany([{
//     name: "Java Masterclass",
//     price: 20000,
//     assignments: 25,
//     projects: 10
// },
// {
//     name: "Python for Data Science",
//     price: 15000,
//     assignments: 20,
//     projects: 8
// },
// {
//     name: "C++ DSA Bootcamp",
//     price: 12000,
//     assignments: 30,
//     projects: 12
// },
// {   
//     name: "React & Node.js Fullstack",
//     price: 18000,
//     assignments: 15,
//     projects: 20
// },
// {
//     name: "Android Development with Kotlin",
//     price: 14000,
//     assignments: 18,
//     projects: 7
// }
// ]
// )

// let a = db.courses.find({price: 0})

// console.log(a.toArray())

// let b = db.courses.findOne({price: 0})

// console.log(b)

// Update

db.courses.updateOne({price: 0}, {$set:{price: 100}})

db.courses.updateMany({price: 100}, {$set:{price: 1000}})    

// Delete
db.courses.deleteOne({price: 1000})

db.courses.deleteMany({price: 1000})        

// https://www.mongodb.com/docs/v7.0/
