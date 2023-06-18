const express = require('express');
const path = require('path');
const PORT = 3030;
const app = express();

app.use(express.static('public'));

//Rutas
app.get('/',(req,res)=>res.sendFile(path.join(__dirname,'views/home.html')));

app.get('/about', function(req,res){ res.sendFile(path.join(__dirname,'views/about.html'))});

app.get('/contact',function(req,res){res.sendFile(path.join(__dirname,'views/contact.html'))});

app.get('/music',(req,res)=>res.sendFile(path.join(__dirname,'views/music.html')));

app.get('/*',(req,res)=>res.sendFile(path.join(__dirname,'views/404notfound.html')));

app.listen(PORT, ()=> console.log(`Server in running http://localhost:${PORT}`))