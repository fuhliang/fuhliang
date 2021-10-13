const express = require('express')

const app = express();

const static = express.static('./public');
app.use(static);

app.use(
    function (req, res, next) {
        console.log('m1');
        next()  
    },
    function (req, res, next) {
        console.log('m2');
        next()
    }
)
app.use(function (req, res, next) {
    console.log('m3')
    next()
})

app.use('/api',function (req, res) {
    console.log('api')
    res.send('api')
})
app.use('/login',function (req, res, next) {
    console.log('login')
    res.send('login')
})


app.get('/goodslist', function (req, res) {
    res.send([
        {name: 'good1', price: 6998},
        {name: 'good2', price: 9998},
        {name: 'good3', price: 12998},
    ])
})
app.get('/goods', function (req, res) {
    res.send([
        {name: 'good1',price: 6998}
    ])
})
app.post('/goods', function (req, res) {
    res.send('添加商品')
})
app.delete('/goods', function (req, res) {
    res.send('删除商品')
})
app.put('/goods', function (req, res) {
    res.send('修改商品')
})

app.post('/user', function (req, res) {
    res.send('添加用户')
})
app.delete('/user', function (req, res) {
    res.send('删除用户')
})
app.put('/user', function (req, res) {
    res.send('修改用户')
})
app.get('/user', function (req, res) {
    res.send('查询用户')
})

app.listen(2021, function () {
    console.log('server is running');
})