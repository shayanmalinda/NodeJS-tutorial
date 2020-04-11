const MongoClient = require("mongodb");
MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
  if (err) {
    return console.log("Unable to connect to MongoDB Server");
  }

  console.log("Connected to MongoDB Server");
  db.collection("Todos").insertOne(
    {
      test: "Something to do",
      completed: false,
    },
    (err, result) => {
      if (err) {
        return console.log("Unable to insert off", err);
      }
      console.log(JSON.stringify(result.ops, undefined, 2));
    }
  );

  db.close();
});
