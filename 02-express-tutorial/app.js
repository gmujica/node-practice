const http = require('http');
const { readFileSync } = require('fs');

//get all files
const homePage = readFileSync('./navbar-app/index.html');
const homeStyes = readFileSync('./navbar-app/styles.css');
const homeImages = readFileSync('./navbar-app/logo.svg');
const homeLogic = readFileSync('./navbar-app/browser-app.js');

const server = http.createServer((req, res) =>{
    const url = req.url;
    console.log(url);

    if(url === '/') {
        res.writeHead(200, {'content-type':'text/html'});
        //console.log('user hit the server');
        res.write(homePage);
        res.end();
    }
    else if(url === '/about') {
        res.writeHead(200, {'content-type':'text/html'});
        //console.log('user hit the server');
        res.write('<h1>About page</h1>');
        res.end();
    }
    //styles
    else if(url === '/styles.css') {
        res.writeHead(200, {'content-type':'text/css'});
        //console.log('user hit the server');
        res.write(homeStyes);
        res.end();
    }
    //image/logo
    else if(url === '/logo.svg') {
        res.writeHead(200, {'content-type':'image/svg+xml'});
        //console.log('user hit the server');
        res.write(homeImages);
        res.end();
    }
    //logic
    else if(url === '/browser-app.js') {
        res.writeHead(200, {'content-type':'text/javasript'});
        //console.log('user hit the server');
        res.write(homeLogic);
        res.end();
    }
    else {
        res.writeHead(404, {'content-type':'text/html'});
        //console.log('user hit the server');
        res.write('<h1>page not found</h1>');
        res.end();
    }
});

server.listen(5000);

