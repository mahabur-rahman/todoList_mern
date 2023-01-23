const mongoose = require("mongoose");

// schema
const TodoSchema = new mongoose.Schema({
  text: { type: String, required: true },
});

// export
module.exports = mongoose.model("toDoList", TodoSchema);
