import React from "react";

const TodoList = ({ toData, check, onDelete, onCheck }) => {
  return (
    <li>
      <span style={{ textDecoration: check ? "line-through" : "none" }}>
        {toData}
      </span>
      <button onClick={() => onDelete(toData)}>Delete</button>
      <button onClick={() => onCheck(toData)}>Done</button>
    </li>
  );
};

export default TodoList;
