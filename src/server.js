require('dotenv').config("./env");

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
const port = 9000

app.use(cors())
app.use(bodyParser.json())

app.get("/ping", (req, res) => {
    res.status(200).json({msg: "pingo"})
})

app.get("/env", async (req, res) => {
    res.status(200).json(process.env)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`, new Date())
})

