import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import bodyParser from 'body-parser'
const app = express()
const port = process.env.PORT

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });
app.use(cors())

app.get('/',(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send('this is home page')
})

app.get('/instagram',(req,res)=>{
    res.send('this is my instagram page')
})

app.get('/linkedin',(req,res)=>{
    res.send('this is my linkedin page')
})

app.get('/github',(req,res)=>{
    res.json({
        name:'nandish bs',
        email : 'nandishbs11@gmail.com'
    })
})

app.get('/anime',(req,res)=>{
    res.send('iam an anime fan')
})

app.post('/post',(req,res)=>{
    res.send({'msg' : 'your post request is recieved', yourrequest : req.body})
})

app.listen(port,()=>{
    console.log("app listening at http://localhost:"+port)
})