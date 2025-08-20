const express = require('express')
const blog = require('.routes/blog')
const app = express()
const port = 3000

app.use(express.static("public"))
app.use('/blog', blog)

app.get('/', (req, res) => {
    console.log("Hey its a get request")
    res.send('Hello World2322!')
}).post('/', (req, res) => {
    console.log("Hey its a post request")
    res.send('Hello World post!')
})

// Two ways to write this syntax

app.put('/', (req, res) => {
    console.log("Hey its a put request")
    res.send('Hello World put!')
})

app.get("/index", (req, res) => {
    console.log("Hey its index")
    res.sendFile('templates/about.html', { root: __dirname })
})

app.get("/api", (req, res) => {
    console.log("Hey its index")
    res.json({ a: 1, b: 2, c: 3, d: 4, name:["namit", "ronaldo"] })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
