     
     require('dotenv').config()

 console.log("he bro how the backend is going on now")


const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
  res.send("hp pavillon")
})


app.get('/Login',(req,res)=>{
res.send("<h1>Please login on hp pavillon<h1>")
})

app.listen( process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})