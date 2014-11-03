/**
Vipin Aggarwal
11/02/2014

Cassandra Client

**/

var cassandra = require('cassandra-driver'); // cassandra driver
var conf = require('./casdb.json');          // cassandra connection configuration

// cassandra connection options
var options = {
    contactPoints : [conf.host], // host to connect (any node in the cluster)
    authProvider  : new cassandra.auth.PlainTextAuthProvider(conf.user, conf.pass),
    keyspace      : conf.keyspace
}

// class casdb
var casdb = function() {
    this.client = new cassandra.Client(options);
}

casdb.prototype.open = function(cb) {
    this.client.connect(function (err, result) {
        cb(err, result);
    });
}

module.exports = new casdb();
