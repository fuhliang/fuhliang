const http = require('http');
const fs = require('fs');
const path = require('path')
const mime = require('./mime')

http.createServer((req,res)=>{

    const {pathname} = new URL('http://xxxx.com'+req.url);
    const realPath = path.join(__dirname,pathname)
    const type = path.extname(pathname).slice(1)
    fs.readFile(realPath,function(err,content){

        if(err){
            res.writeHead(404,{
                'Content-Type':`text/plain;charset=utf8`
            })
            res.end('文件不存在')
        }
        res.writeHead(200,{
            'Content-Type':`${mime[type]};charset=utf8`
        })
        res.end(content)
    })

}).listen(2021,()=>{
    console.log('server is running');
})
