const { read } = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') { // se for a home page
        res.end('Welcome to our home page')
    }
    if(req.url === '/about') {
        res.end('Here is our short history')
    }
    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>
    `)
})

// qual porta nosso servidor vai ouvir
server.listen(5001)

