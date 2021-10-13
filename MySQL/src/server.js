const express = require('express')
const router = require('./router')

const app = express();
app.use(express.static('../public'))

app.use('/api',router)

app.listen(2021,()=>{
    console.log('server is running at port 2021');
})