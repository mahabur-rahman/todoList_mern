import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import TodoList from "./components/TodoList";

function App() {
  const [lists, setLists] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isUpdating, setIsUpdating] = useState("");

  // get all todos
  const getAllTodos = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/todo-lists`);

      setLists(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllTodos();
  }, []);

  // handleChange
  const handleChange = (e) => {
    const value = e.target.value;

    setInputValue(value);
  };

  // after btn click || add todo

  const addTodo = async (e) => {
    try {
      if (isUpdating === "") {
        const res = await axios.post(`http://localhost:5000/saveTodo`, {
          text: inputValue,
        });

        setInputValue("");
      } else {
        const res = await axios.put(`http://localhost:5000/${isUpdating}`, {
          text: inputValue,
        });
        setInputValue("");

        setIsUpdating("");
      }
    } catch (err) {
      console.log(err);
    }
  };

  // update todo
  const updateTodo = (id, text) => {
    setIsUpdating(id);
    setInputValue(text);
  };

  // delete todo
  const deleteTodo = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:5000/${id}`);

      alert(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="App">
        <div className="container">
          <h1>ToDo App</h1>
          <div className="top">
            <input
              type="text"
              placeholder="Write Something..."
              value={inputValue}
              onChange={handleChange}
            />
            <button className="add" onClick={addTodo}>
              {isUpdating ? "Update" : "Add"}
            </button>
          </div>

          <div className="list">
            {lists.map((list) => {
              return (
                <TodoList
                  key={list._id}
                  {...list}
                  update={() => updateTodo(list._id, list.text)}
                  remove={() => deleteTodo(list._id)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
