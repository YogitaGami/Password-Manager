const express = require('express')
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const passop = require("./Models/passOp");
const cors = require("cors")


dotenv.config() 
let conn = mongoose.connect(process.env.MONGO_URI);
const app = express()
const port = 3000
app.use(cors())

// Get all the passwords 
app.get('/', async(req, res) => {
    const password = await passop.find();
    res.json(password);
})

// save All the passwords
app.post('/', async(req, res) => {
    let password = req.body
    console.log(password.id)
    const passops = await passop.insertMany(password);
    res.json(passops);
})

//  delete the password
app.delete('/', async(req, res) => {
    let password = req.body
    console.log(password)
    const passops = await passop.deleteOne(password)
    console.log(passops)
    res.json(password);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})