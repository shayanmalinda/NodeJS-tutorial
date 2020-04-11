const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
  if (err) {
    return console.log("Unable to connect to MongoDB Server");
  }

  console.log("Connected to MongoDB Server");

  db.collection("Todos")
    .findOneAndUpdate(
      {
        _id: new ObjectID("5e914abe4ff8dfab4c0e424a"),
      },
      {
        $set: {
          completed: true,
        },
      },
      {
        returnOriginal: false,
      }
    )
    .then((result) => {
      console.log(result);
    });
});
