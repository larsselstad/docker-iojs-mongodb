/*jslint node: true */

function findAll(collection, collectionName, callback) {
    collection.find({}).toArray(function (findError, docs) {
        if (findError) {
            console.log('Error in find. Error:', findError);

            return;
        }

        console.log("Found the following records in " + collectionName);
        console.dir(docs);

        callback();
    });
}

var db = require('../dbWrapper');

db(findAll);