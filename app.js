var db = require('./modules/casdb');

db.open(function(err, result) {
    if(!err) {
        console.log('connected to cassandra');
    } else {
        console.log('connect failure');
    }
});
