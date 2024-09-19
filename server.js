import express from 'express'

var app = express()
const port=3000

app.use('/',function(req, res){
    res.send('hello world')
})

app.use('/path',function(req, res){
    res.send('Another response')
})

app.get('/',)

app.listen(port)
console.log(`server is running at port http://localhost:${port}`)
module.exports=app

var str = 'Hello world!'
app.set('str',str)