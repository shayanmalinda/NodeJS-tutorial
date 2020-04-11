var Todo = mongoose.model("Todo", {
  text: {
    type: String,
    require: true,
    minLength: 1,
  },
  completed: {
    type: Boolean,
  },
  completedAt: {
    type: Number,
    default: null,
  },
});
