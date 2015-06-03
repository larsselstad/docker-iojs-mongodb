/*jshint node:true*/

module.exports = {
    url: process.env.MONGO1_PORT_27017_TCP_ADDR || '0.0.0.0',
    port: process.env.MONGO1_PORT_27017_TCP_PORT || '27017',
    db: 'test',
    collectionName: 'col'
};