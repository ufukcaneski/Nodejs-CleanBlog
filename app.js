const express = require('express');
const app = express();

app.get('/', (req, res) => {
    const blog = {
        id: 1,
        title: 'My first blog post',
        description: 'This is my first blog post'
    }
    res.send('Hello World!');
});
