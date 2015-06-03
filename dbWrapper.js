/*jslint node: true */

var mongodb = require('mongodb');
var config = require('./config');

// Connection URL. This is where your mongodb server is running.
var url = 'mongodb://' + config.url + ':' + config.port + '/' + config.db;

module.exports = function (callback) {
    // Use connect method to connect to the Server
    mongodb.MongoClient.connect(url, function (connectError, db) {
        if (connectError) {
            console.log('Unable to connect to the mongoDB server. Error:', connectError);
        } else {
            console.log('Connection established to', url);
            
            callback(db.collection(config.collectionName), config.collectionName, function () {
                db.close();
            });
        }
    });
};