// Import MySQL connection.
var connection = require("../config/connection.js");


// Helper function for SQL syntax.
// Let's say we want to pass 3 values into the mySQL query.
// In order to write the query, we need 3 question marks.
// The above helper function loops through and creates an array of question marks - ["?", "?", "?"] - and turns it into a string.
// ["?", "?", "?"].toString() => "?,?,?";
	function printQuestionMarks(num) {
		var arr = [];
		for (var i = 0; i < num; i++) {
			arr.push("?");
		}
		return arr.toString();
	}
	// Helper function to convert object key/value pairs to SQL syntax
	function objToSql(ob) {
	var arr = [];
	// loop through the keys and push the key/value as a string int arr
	for (var key in ob) {
		var value = ob[key];
		// check to skip hidden properties
		if (Object.hasOwnProperty.call(ob, key)) {
			// if string with spaces, add quotations (Double Cheese Burger => 'Double Cheese Burger')
			if (typeof value === "string" && value.indexOf(" ") >= 0) {
				value = "'" + value + "'";
			}
			// e.g. {name: 'Double Cheese Burger'} => ["burger_name='Double Cheese Burger'"]
			// e.g. {devoured: true} => ["devoured=true"]
			arr.push(key + "=" + value);
		}
	}
	// translate array of strings to a single comma-separated string
	return arr.toString();
	}


// Object Relational Mapper (ORM)
// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection

// Object for all our SQL statement functions.
var orm = {

	//This function selects all the entries on the database
	all: function (tableInput, cb) {
		//This is the mySQL query syntax to pass through
		var queryString = "SELECT * FROM " + tableInput + ";";
		//Now we actually pass the query via the connection to the database
		connection.query(queryString, function (error, result) {
			//Check if there is an error
			if (error) {
				//If there is an error, give us the error
				throw error;
			} //Otherwise(Else)
			//Call Back the result
			cb(result);
			console.log(result);
		}); //End of connection
	}, //End of selectAll

	//This function creates (inserts) one new entry into the database
	create: function (table, cols, vals, cb) {
		//This is the mySQL query syntax to pass through
		var queryString = "INSERT INTO " + table;

			queryString += " (";
			queryString += cols.toString();
			queryString += ") ";
			queryString += "VALUES (";
			queryString += printQuestionMarks(vals.length);
			queryString += ") ";

			console.log(queryString);

		//Now we actually pass the query via the connection to the database
		connection.query(queryString, vals, function (error, result) {
			//Check if there is an error
			if (error) {
				//If there is an error, give us the error
				throw error;
			} //Otherwise(Else)
			//Call Back the result
			cb(result);
			console.log(result);
		}); //End of connection
	}, //End of insertOne

	//This function updates one of the entries already in the database
	//An example of objColVals would be {burger_name: Hamburger, devoured: true}
	update: function(table, objColVals, condition, cb) {
		//This is the mySQL query syntax we are constructing to pass it through
		var queryString = "UPDATE " + table;
	
		queryString += " SET ";
		queryString += objToSql(objColVals);
		queryString += " WHERE ";
		queryString += condition;
	
		console.log(queryString);

		//Now we actually pass the query via the connection to the database
		connection.query(queryString, function(err, result) {
			//Check if there is an error
			if (err) {
				//If there is an error, give us the error
				throw err;
			} //Otherwise(Else)

			//Call Back the result
			cb(result);
			console.log(result);
		});
	} //End of updateOne
}; //END OF ORM

// Export the orm object for the model (burger.js).
module.exports = orm;
