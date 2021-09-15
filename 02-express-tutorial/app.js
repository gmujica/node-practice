const express = require('express');
const app = express();
let { people } = require('./data')

const PORT = 5000;

// static assets
app.use(express.static('./methods-public'))

// parse form data
app.use(express.urlencoded({ extended: false }))

app.get('/ai/people', (req, res) => {
   res.status(200).json({ success: true, data: people })
});

app.post('/login', (req, res) => {
   //console.log(req.body);
   const { name } = req.body
   if(name) {
      return res.status(200).send(`Welcome ${name}`)
   }
   res.status(401).send('Please provide credentials')
})

app.listen(PORT, () => {
   console.log(`ther server is listennig on port ${PORT}`);
});