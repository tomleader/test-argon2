const express = require('express')
const app = express()
const port = 9000
const argon2 = require('argon2');

app.get('/', async (req, res) => {

    const hash = await argon2.hash("password");
    console.log(hash);
    res.send('Hello World!' + hash)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})