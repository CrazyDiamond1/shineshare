var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
  if (err) {
    console.error('An error occurred connecting to MongoDB: ', err);
  } else {
    var dbo = db.db("mydb");
    dbo.createCollection("customers", function (err, res) {
      if (err) throw err;
      console.log("Collection created!");
      db.close();
    });
  }
});