const MongoClient = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
  if (err) {
    return console.log("Unable to connect to MongoDB Server");
  }

  console.log("Connected to MongoDB Server");

  db.collection("Todos")
    .find({ completed: true })
    .toArray()
    .then(
      (docs) => {
        console.log("Todos");
        console.log(JSON.stringify(docs, undefined, 2));
      },
      (err) => {
        console.log("Unable to fetch data", err);
      }
    );

  // db.collection("Todos")
  // .find()
  // .count()
  // .then(
  //   (count) => {
  //     console.log(count);
  //   },
  //   (err) => {
  //     console.log("Unable to fetch data", err);
  //   }
  // );

  db.close();
});
