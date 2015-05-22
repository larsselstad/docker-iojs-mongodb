/*jslint node: true */

var mongodb = require('mongodb');
var config = require('./config');

//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;

// Connection URL. This is where your mongodb server is running.
var url = 'mongodb://' + config.url + ':' + config.port + '/' + config.db;

// Use connect method to connect to the Server
MongoClient.connect(url, function (connectError, db) {
    if (connectError) {
        console.log('Unable to connect to the mongoDB server. Error:', connectError);
    } else {
        //HURRAY!! We are connected. :)
        console.log('Connection established to', url);
        
        //Close connection
        db.close();
    }
});