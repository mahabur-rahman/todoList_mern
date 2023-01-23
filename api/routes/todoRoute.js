const express = require("express");
const router = express.Router();
const {
  createdTodo,
  getAllTodoLists,
  updateTodo,
  deleteTodo,
} = require("../controllers/todoController");

// create todo
router.post("/saveTodo", createdTodo);
// get all todo list
router.get("/todo-lists", getAllTodoLists);
// update todo
router.put("/:todoId", updateTodo);
// delete todo
router.delete("/:id", deleteTodo);

module.exports = router;
