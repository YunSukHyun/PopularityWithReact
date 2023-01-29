const express = require('express');
const app = express();
const maria = require('mysql');
require("dotenv").config();
const db_config = {
    host:'localhost',
    port:process.env.DB_PORT,
    user:'root',
    password:process.env.PW,
    database:'popularity'
};
const conn = maria.createConnection(db_config);
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'))
app.use(express.json())

conn.connect();
conn.query('SELECT * from genshin', (error, rows, fields) => {
        if (error) throw error;
        console.log(rows);
    }
);

app.get('/', (req, res)=>{
})

app.get('/submit', (req, res)=>{
})

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Example app listening at http://localhost:${process.env.SERVER_PORT}`)
})