const express = require('express');

const mysql = require('mysql')
const pool = mysql.createPool({
    host : 'localhost',
    user : 'root',
    password : '1008611',
    database : 'h52108'
});

const router = express.Router();
module.exports = router;

router.get('/list',(req,res)=>{

    const sql = `select * from goods`
    pool.query(sql,(err,rows)=>{
        res.send(rows)
    })
})
router.get('/:id',(req,res)=>{
    const {id} = req.params;
    const sql = `select * from goods where id=${id}`

    pool.query(sql,(err,rows)=>{
        res.send(rows)
    })
})