const express = require('express');
const db = require('../db')

const router = express.Router();
module.exports = router;

router.post('/',async(req,res)=>{
    const {username,password} = req.body;
    console.log(req.body);
    const sql = `insert into users(username,password) values('${username}','${password}')`

    const data = await db(sql)
    if(data.insertId){
        res.send({
            code:200,
            data:[],
            msg:'success'
        })
    }else{
        res.send({
            code:400,
            data:[],
            msg:'fail'
        })
    }
})

router.get('/check',async(req,res)=>{
    const {username} = req.query;
    
    const sql = `select username from users where username='${username}'`

    const data = await db(sql)
    if(data.length>0){
        res.send({
            code:400
        })
    }else{
        res.send({
            code:200
        })
    }
})

