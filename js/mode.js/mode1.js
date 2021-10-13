const http = require("http");

const server = http.createServer(
    // 请求，响应
    // req封装了用户的请求信息
    // res用来给用户写出响应内容
       (req,res) => {
        // res.statusCode = 200;
        // res.setHeader("content-type","text/plain");
        console.log(url.parse());
        res.end("console.log(new date());");
        
            
        
    }
);

// 服务器监听在3000端口
// 端口=应用程序的一个逻辑端口【0-65535】
// 其中【0-1024】为系统保留端口（我们不要去用） 其中http协议默认走80端口 https协议默认走443端口
server.listen(
    3000,
    ()=>{
    console.log('Server running at http://127.0.0.1:3000/');
});