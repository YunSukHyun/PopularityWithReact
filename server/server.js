const express = require('express');
const app = express();
const maria = require('mysql');
require("dotenv").config();
const db_config = {
    host:'localhost',
    port:process.env.DB_PORT,
    user:'root',
    password:process.env.PW,
    database:'priconne'
};
const conn = maria.createConnection(db_config);
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'))
app.use(express.json())
app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
})

app.get('/submit', (req, res)=>{

})

conn.connect();
app.post('/add', (req, res)=>{
    //console.log(typeof(req.body.s10[0]));
    let s10 = req.body.s10;
    let s8 = req.body.s8;
    let s7 = req.body.s7;
    let m1 = req.body.m1;
    let m2 = req.body.m2;
    let m3 = req.body.m3;
    let update_s10 = 'update princess set score = score+10, s10 = s10+1 where name ="';
    let update_s8 = 'update princess set score = score+8, s8 = s8+1 where name ="';
    let update_s7 = 'update princess set score = score+7, s7 = s7+1 where name ="';
    let update_m1 = 'update princess set score = score-1, ms1 = ms1+1 where name ="';
    let update_m2 = 'update princess set score = score-2, ms2 = ms2+1 where name ="';
    let update_m3 = 'update princess set score = score-3, ms3 = ms3+1 where name ="';
    
    for(let i = 0; i < s10.length; i++){
        conn.query(update_s10 + s10[i] + '"', (err, rows, fields)=>{
            if(err) console.log(err);
        })
    }
    for(let i = 0; i < s8.length; i++){
        conn.query(update_s8 + s8[i] + '"', (err, rows, fields)=>{
            if(err) console.log(err);
        })
    }
    for(let i = 0; i < s7.length; i++){
        conn.query(update_s7 + s7[i] + '"', (err, rows, fields)=>{
            if(err) console.log(err);
        })
    }
    for(let i = 0; i < m1.length; i++){
        conn.query(update_m1 + m1[i] + '"', (err, rows, fields)=>{
            if(err) console.log(err);
        })
    }
    for(let i = 0; i < m2.length; i++){
        conn.query(update_m2 + m2[i] + '"', (err, rows, fields)=>{
            if(err) console.log(err);
        })
    }
    for(let i = 0; i < m3.length; i++){
        conn.query(update_m3 + m3[i] + '"', (err, rows, fields)=>{
            if(err) console.log(err);
        })
    }
    res.send("제출 완료");
})

app.get('/result', (req, res)=>{
    conn.query('select * from princess order by score desc', (err, rows, fields)=>{
        if(!err){
            
        }
        else{
            console.log(err);
            res.json({"err": err});
            conn.end();
        }
    })
})

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Example app listening at http://localhost:${process.env.SERVER_PORT}`)
})