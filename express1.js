const exp = require("express");
const path = require('path')


const app = exp();
const publicPath = path.join(__dirname,'html');

app.use(exp.static(publicPath));

app.get('/home',(req,res)=>{
    res.send(`
        <h1>This is example of Express</h1>
        <a href="index.html">Click ME</a>
    `)
});

app.get('/about',(req,res)=>{
    res.send(`
        <h1>About</h1>
        <a href="/home">Go To Home</a>
    `);
});

app.listen(8005);