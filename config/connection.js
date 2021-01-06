const mysql = require("mysql");

// const connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "secretpassword",
//   database: "burgers_db"
// });

const connection = mysql.createConnection({
  host: "dt3bgg3gu6nqye5f.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "rli9epp9jbdszx2n",
  password: "s19oea4coh52280h",
  database: "gcvikyfrq54kl52f"
});

// making connection
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// exporting connection
module.exports = connection;