const http = require('http');

const server = http.createServer(function(req,res){

    res.writeHead(200,{
        'Content-Type':'text/html;charset=utf8'
    })
        res.write('<p>hello</p>')
        res.end('花花')
})

server.listen(2021,function(){
    console.log('sunning server');
})