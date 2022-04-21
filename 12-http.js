const http = require('http');

// This will create our app server
// This code will run when there's a request into our server
const server = http.createServer((req, res) => {

    // Req returns an object with a lot of useful properties for our server
    console.log(req)

    // req.url help us to get the url that our client is checking, so we can send different content
    if (req.url == '/') res.end('Welcome to our home page')
    if (req.url == '/about') res.end('Welcome to our about page')

    // If our client wants to acces a root that doesn't exist we'll send a default response
    res.end(`
        <H1>Oops!!</H1>
        <p>Can's seem to find the page you're looking for</p>
    `)
})

// This is the port where our server will be running
server.listen(5000)