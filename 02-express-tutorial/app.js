const express = require('express');
const app = express();

const PORT = 5000;



app.all('*', (req, res) => {
   res.status(404).send('<h1>Resource not found</h1>');
});

app.listen(PORT, () => {
   console.log(`ther server is listennig on port ${PORT}`);
});

