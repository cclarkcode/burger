var connection = require('./connection.js');

var table = 'burgers';

var orm = {
    selectAll: function(callback) {

        var querystring = 'SELECT * FROM ' + table;

        connection.query(querystring, function(err,result) {

            callback(result);

        });

    },

    insertOne: function (burger, callback) {

        var querystring = 'INSERT INTO ' + table + ' (burger_name) VALUES (?)';
    
        connection.query(querystring, burger, function(err,result) {

            callback(result);
        });
    },

    updateOne: function (id,callback) {

        var querystring = 'UPDATE ' + table + ' SET devoured = TRUE WHERE id=?';

        connection.query(querystring,[id], function(err, results) {

            callback(results);
        });

    }
}

module.exports = orm;