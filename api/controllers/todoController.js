const TodoModel = require("../models/todoModel");

const createdTodo = async (req, res) => {
  const { text } = req.body;

  try {
    const todo = await TodoModel.create({ text });

    // save on db
    const savedTodo = await todo.save();

    return res.status(201).json(savedTodo);
  } catch (err) {
    return res.status(404).json({ message: err });
  }
};

// get all todo
const getAllTodoLists = async (req, res) => {
  try {
    const listOfTodo = await TodoModel.find();

    return res.status(200).json(listOfTodo);
  } catch (err) {
    return res.status(400).json(err);
  }
};

// update todo
const updateTodo = async (req, res) => {
  const { todoId } = req.params;
  try {
    const updateTodo = await TodoModel.findByIdAndUpdate(todoId, req.body, {
      new: true,
    });

    return res.status(200).json(updateTodo);
  } catch (err) {
    return res.status(400).json(err);
  }
};

// delete todo
const deleteTodo = async (req, res) => {
  const { id } = req.params;

  try {
    await TodoModel.findByIdAndDelete(id);

    return res.status(200).json("Todo has been deleted...");
  } catch (err) {
    return res.status(400).json(err);
  }
};

// export
module.exports = {
  createdTodo,
  getAllTodoLists,
  updateTodo,
  deleteTodo,
};
