// express
const express =require("express");
const app = express();

// ejs-mate
const ejsMate = require('ejs-mate');
app.engine('ejs', ejsMate);

//ejs
const path = require('path');

// set search engine

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'/views'))

//static
// app.use(express,static('public'));
app.use(express.static(path.join(__dirname,'public')));


// route index
app.get('/',(req,res)=>{
    res.render('index')
});

// route to why us
app.get('/Why_Us',(req,res)=>{
    res.render('whyus')
});

// route to service
app.get('/Service',(req,res)=>{
    res.render('service')
});
// route to gallery
app.get('/Gallery',(req,res)=>{
    res.render('gallery')
});
// contact
app.get('/Contact',(req,res)=>{
    res.render('contact')
});
// contact
app.get('/terms',(req,res)=>{
    res.render('terms')
});
app.listen(8080,()=>{
    console.log("8080")
})