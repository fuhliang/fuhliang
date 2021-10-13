const mysql = require('mysql')
const pool = mysql.createPool({
    host  : 'localhost',
    user  :  'root',
    password : '1008611',
    database : 'h52108'
});

// module.exports = function(sql,callback){
//     pool.query(sql,(err,rows)=>{
//         if(err){
//             throw err;
//         }
//         callback(rows)
//     })
// }

module.exports = function(sql){
    return new Promise((resolve,reject)=>{
        pool.query(sql,(err,rows)=>{
            if(err){
                reject(err);
            }
            resolve(rows)
        })
    })
}