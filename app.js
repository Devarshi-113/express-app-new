const express = require('express')
const app = express()
const port = 5000

app.use(express.static("public"))

app.get('/', (req, res) => {
  res.send(`Hello World!
Im robot
Speed 1 terahertz
Memory 1 zetabytes`)
})

app.get('/robot', (req, res) => {
    res.sendFile(__dirname+'/chitti.html')
})

app.get('/sana', (req, res) => {
    res.sendFile(__dirname+'/sana.html')
})

app.get('/vaseegaran', (req, res) => {
    res.sendFile(__dirname+'/vasee.html')
})

app.get('/chipinstall',(req,res) =>{
    var spd= req.query.spd;
    var mem=req.query.mem;
    var ns=req.query.ns;
    if(ns=="red"){
        res.send(`${ns} Chip Installed Speed ${spd} Terahertz Memory ${mem} Zetabytes`)
    }
    else{
        res.send(`${ns} Chip Installed Speed ${spd} Terahertz Memory ${mem} Zetabytes`)
    }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port} live on http://127.0.0.1:${port}`)
})