var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/quiz2";
var query = { name : "Madee" };
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  db.collection("users").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});