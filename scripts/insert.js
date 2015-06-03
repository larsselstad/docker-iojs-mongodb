/*jshint node: true*/

var mongodb = require('mongodb');
var config = require('../config');

var users = [
    {
        'name': 'lars',
        'password': 'boomboommbang'
    },
    {
        'name': 'steve',
        'password': 'rambambabam'
    },
    {
        'name': 'kent',
        'password': '1234qwer'
    }

];

function insert(collection, collectionName, callback) {
    collection.insert(users, function (err, result) {
        if (err) {
            console.error('Error on insert: ' + err);

            return;
        }

        console.log('Inserted ' + result.result.n + ' users in collection ' + collectionName);
        console.log('Inserted ' + result.ops.length + ' users in collection ' + collectionName);

        console.log(result);

        //Close connection
        callback();
    });
}

var db = require('../dbWrapper');

db(insert);