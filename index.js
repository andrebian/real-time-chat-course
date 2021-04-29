// var http = require('http')
//
// http
//     .createServer((req, res) => {
//         res.writeHead(200, { 'Content-type': 'text/plain' })
//         res.end('Hello World! I am amazing')
//     })
//     .listen(3000)
//
// console.log('Server started')


var express = require('express')
var app = express()

app.get('/', (req, res) => {
    res.send('Hello World! This is an example with Node JS and Express')
})

app.listen(3000, () => {
    console.log('Server started')
})
