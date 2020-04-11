const MongoClient = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
  if (err) {
    return console.log("Unable to connect to MongoDB Server");
  }

  console.log("Connected to MongoDB Server");

  //THERE ARE 3 METHODS

  //deleteMany
  db.collection("Todos")
    .deleteMany({ test: "Hi there" })
    .then(
      (result) => {
        console.log(result);
      },
      (err) => {
        console.log(err);
      }
    );

  //deleteOne

  //findOneAndDelete
  // return the document
});
