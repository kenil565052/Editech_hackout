const express=require('express')
const morgan=require('morgan')
const mongoose=require('mongoose')
const bodyparser=require('body-parser')
const path=require('path')
const router=require('./routes/adminrouter')


mongoose.connect('mongodb://localhost/boss',{ useNewUrlParser: true, useUnifiedTopology: true })
const app=express();
const db=mongoose.connection;
db.on('error',(error)=>{
    console.log('error')
    throw error
})
db.once('open',()=>{
    console.log("database created")
})

app.use(morgan('dev'))
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())


app.set('view engine','pug')
app.set('views',path.join(__dirname,'views1'));

const Port=3000;

app.get('/admin',(req,res)=>{
    // res.send("hlo")
    // res.end()
    res.render('index.pug')
})
app.listen(Port,()=>{
    console.log("running")
})

app.use('/admin',router);       