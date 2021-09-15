const express = require('express');
const app = express();
const morgan = require('morgan')
const logger = require('./middlewares/logger')
const authorize = require('./middlewares/authorize')

//app.use(logger)
//app.use('/api', logger)
// api/home/about/products

//multiple middkewares
//app.use([logger, authorize])

app.use(morgan('tiny'))

const PORT = 5000;

app.get('/', (req, res) => {
   res.send('Home')
})

app.get('/about', (req, res) => {
   res.send('About')
})

app.get('/api/products', (req, res) => {
   res.send('Products')
})

app.get('/api/items', (req, res) => {
   res.send('Items')
})

app.listen(PORT, () => {
   console.log(`ther server is listennig on port ${PORT}`);
});