const MongoClient = require("mongodb");
MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
  if (err) {
    return console.log("Unable to connect to MongoDB Server");
  }

  console.log("Connected to MongoDB Server");
  db.collection("Todos").insert(
    {
      test: "Something to do 2",
      completed: false,
    },
    (err, result) => {
      if (err) {
        return console.log("Unable to insert off", err);
      }
      console.log(result.ops[0]._id);
    }
  );

  db.close();
});
