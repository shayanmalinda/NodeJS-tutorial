const mongoose = require("./db/mongoose");

var Todo = mongoose.model("Todo", {
  text: {
    type: String,
  },
  completed: {
    type: Boolean,
  },
  completedAt: {
    type: Number,
  },
});

var newTodo = new Todo({
  text: "Cook dinner",
});

newTodo.save().then(
  (doc) => {
    console.log("Saved todo", doc);
  },
  (err) => {
    console.log(err);
  }
);
