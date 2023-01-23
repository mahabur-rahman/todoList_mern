import React from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const TodoList = ({ text, update, remove }) => {
  return (
    <>
      <div style={{ display: "flex", marginTop: "2rem" }}>
        <h1>{text}</h1>
        <button onClick={update}>
          <FaEdit />
        </button>
        <button onClick={remove}>
          <FaTrashAlt />
        </button>
      </div>
    </>
  );
};

export default TodoList;
