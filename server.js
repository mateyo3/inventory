var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  user: "root",

  password: "Calamigos2015",
  database: "tropical_inventory"
});

var totalCost = "";

connection.connect(function(err) {
  if (err) throw err;
  listProducts();
});

function listProducts() {
    var query = "SELECT * FROM inventory;"
    connection.query(query, function(err, res) {
        for (var i = 0; i < res.length; i++) {
            console.log(
                "Id: " + res[i].id +
                "||" +
                "Product Name: " + res[i].product_name +
                "||" +
                "Description: " + res[i].description +
                "||" +
                "SF_Box: " + res[i].dimension +
                "||" +
                "Quantity: " + res[i].quantity +
                "||" +
                "Total: " + res[i].total
            );
        }
    }); //end: query function
} //end: listProducts function