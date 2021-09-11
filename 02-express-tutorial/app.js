const express = require('express');
const app = express();
const { products } = require('./data')

const PORT = 5000;

app.get('/', (req, res) => {
    res.send('<h1> Home Page </h1><a href="/api/products">products</a>')
});

app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
        const { id, name, image } = product;
        return { id, name, image }
    });
    res.json(newProducts);
});

app.get('/api/products/:id', (req, res) => {
    //console.log(req);
    //console.log(req.params);
    const { id } = req.params;
    const singleProduct = products.find((product) => product.id === Number(id))
    if(!singleProduct) {
        return res.status(404).send('Product does not exist')
    }
    console.log(id)
    res.json(singleProduct)
})

app.get('/api/products/:id/reviews/:rId', (req, res) => {
    console.log(req.params)
    res.send('hello world')
})

app.get('/api/v1/query', (req, res) => {
    //console.log(req.query)
    const { search, limit } = req.query
    let sortedProducts = [...products]

    if(search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.startsWith(search)
        })
    }
    if(limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    res.status(200).json(sortedProducts)
    // res.send('hello world')
})

app.listen(PORT, () => {
   console.log(`ther server is listennig on port ${PORT}`);
});

