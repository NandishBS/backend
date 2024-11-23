import express from 'express'
import 'dotenv/config'

const app = express()
const port = process.env.PORT

app.get('/',(req,res)=>{
    res.send('this is home page')
})

app.get('/instagram',(req,res)=>{
    res.send('this is my instagram page')
})

app.get('/linkedin',(req,res)=>{
    res.send('this is my linkedin page')
})

app.listen(port,()=>{
    console.log("app listening at http://localhost:"+port)
})