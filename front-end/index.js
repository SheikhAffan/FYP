const express = require('express');
const app= express();
const mysql = require('mysql2');
const cors = require('cors');


app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'password',
    database: 'e-votingdb',
});

app.post('/dashboard', (req, res) => {
    const UserName = req.body.Name
    const MotherName = req.body.Mothername
    const CNIC = req.body.CNIC
    const CNICissuedt = req.body.selectedDate

    console.log(CNICissuedt);
    db.query('INSERT INTO userdata (UserName, MotherName, CNIC, CNICissuedt) VALUES (?,?,?,?)',
    [UserName, MotherName, CNIC, CNICissuedt] , 
    (err, result) =>{
        if (err) {
            console.log(err)
        } else {
            res.send("values inserted")
            console.log("inserted sucessfully")
        }
    }
    );
})


app.listen(3001, ()=>{
    console.log("running ");
})