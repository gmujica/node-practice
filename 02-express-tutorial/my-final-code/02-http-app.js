const express = require('express');
const path = require('path');
const app = express();

const PORT = 5000;

// setup static and middleware
app.use(express.static('./public'));

// app.get('/', (req, res) => {
//     //console.log('user hit the server');
//     //res.status(200).send('Home Page');
//     res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
   
// });

app.get('/about', (req, res) => {
   //console.log('user hit the server');
   res.status(200).send('About Page');
});

app.all('*', (req, res) => {
   res.status(404).send('<h1>Resource not found</h1>');
});

app.listen(PORT, () => {
   console.log(`ther server is listennig on port ${PORT}`);
});

