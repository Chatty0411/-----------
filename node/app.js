var express = require("express");
var cors = require("cors");
var app = express();
app.listen(8000);

app.use( express.static('public') );
app.use( express.json() );
app.use( express.urlencoded( {extended: true} ) );
app.use( cors() );

var mysql = require("mysql");
var conn = mysql.createConnection({
    user: "root",
    password: "",
    host: "localhost",
    port: 3306,
    database: "try_sqlcon1"
});

conn.connect(function (err) {
    console.log(err);
})

// 房間資料
app.get("/index/content", function (req, res) {
    conn.query("select * from try_sqlcon2", [],
        function (err, rows) {
            res.send( JSON.stringify(rows) );
     
        }
    )
})

//房間庫存
app.get("/index/contentnow", function (req, res) {
    conn.query("select type, count(*) As 數量 from try_sqlcon2 where isAvalible = 1 group by type", [],
        function (err, rows) {
            res.send( JSON.stringify(rows) );
     
        }
    )
})

// 預約
app.post("/to/checkin", function(req, res) {
    conn.query("INSERT INTO `checkinorder`(`checkindate`, `checkoutdate`, `phonenumber`, `name`, `roomId`, `adult`, `child`) VALUES (?, ?, ?, ?, ?, ?, ?);",
        [req.body.checkindate, req.body.checkoutdate, req.body.phonenumber, req.body.name, req.body.roomId, req.body.adult, req.body.child],
        // [],
        function(err, rows) {
            console.log([req.body.checkindate, req.body.checkoutdate, req.body.phonenumber, req.body.name, req.body.roomId, req.body.adult, req.body.child]);
            res.send( JSON.stringify( req.body));
            
        }
        
    )
    // console.log(res);

})
    



