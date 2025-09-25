const express = require('express')
const app = express()
const port = 9000
const argon2 = require('argon2');

app.get('/', async (req, res) => {
    res.send('Hello World!')
    const hash = await argon2.hash("password");
    console.log(hash);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})