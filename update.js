var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/quiz2";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var myquery = { address: "Valley 345" };
  var newvalues = { name: "Update Mickey", address: "Update Canyon 123" };
  db.collection("users").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
    db.close();
  });
});