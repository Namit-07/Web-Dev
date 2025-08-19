const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

// app.get or app.post or app.put or app.delete(path, handler)
app.get('/', (req, res) => {
  res.send('Hello World! User-07')
})

app.get('/about', (req, res) => {
  res.send('About Us')
})

app.get('/contact', (req, res) => {
  res.send('Hello contact me!')
})

app.get('/blog', (req, res) => {
  res.send('Hello blog!')
})

app.get('/blog/:slug', (req, res) => { // you can add as many as u want after slug like /blog/:slug/:slug
// logic to fetch {slug} from the db
// for URL: http://localhost:3000/blog/intro-to-padosi?mode=dark&region=in
  console.log(req.params) // will output {slug: 'intro-to-padosi'}
  console.log(req.query) // will output {mode: 'dark, region:'in'}

  res.send(`hello ${req.params.slug}`)
})

// app.get('/blog/intro-to-js', (req, res) => {
// // logic to fetch intro to js from the db
//   res.send('Hello welcome to javascript')
// })

// app.get('/blog/intro-to-python', (req, res) => {
// // logic to fetch intro to python from the db
//   res.send('Hello welcome to python')
// })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
