import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import TodoList from "./TodoList";
import { ToastContainer, toast } from "react-toastify";

const TodoForm = () => {
  const [inputData, setInputdata] = useState({});
  const [todo, setTodo] = useState([]);

  const handleInput = (value) => {
    setInputdata({ id: Date.now(), content: value, check: false });
  };

  const handleClick = () => {
    if (inputData.content) {
      const matched = todo.find(
        (newData) => newData.content === inputData.content
      );
      if (!matched) {
        setTodo([
          ...todo,
          {
            id: inputData.id,
            content: inputData.content,
            check: inputData.check,
          },
        ]);
        toast.success("Data Inserted Successfully 😀");
        setInputdata({ id: "", content: "", check: "" });
      } else {
        toast.warning("Duplicate Data 😡");
      }
    } else {
      toast.warning("Data Empty 🧐");
    }
  };

  const handleDelete = (delValue) => {
    const updatedData = todo.filter((delData) => delData.content !== delValue);
    setTodo(updatedData);
    toast("🤯 Data Deleted Successfully");
  };

  const handleCheck = (chkValue) => {
    const checkData = todo.map((task) => {
      if (task.content === chkValue) {
        return { ...task, check: !task.check };
      } else {
        return task;
      }
    });
    setTodo(checkData);
  };

  return (
    <div className="main pt-4">
      <div className="form">
        <input
          id="inputtask"
          type="text"
          placeholder="Enter your task here"
          value={inputData.content}
          onChange={(event) => {
            handleInput(event.target.value);
          }}
        />
        <button id="addbutton" type="button" onClick={handleClick}>
          Add Todo
        </button>
      </div>

      <ol className="todolist">
        {todo.map((nwData) => {
          return (
            <TodoList
              key={nwData.id}
              toData={nwData.content}
              check={nwData.check}
              onDelete={handleDelete}
              onCheck={handleCheck}
            />
          );
        })}
      </ol>
      <button className="clear">Clear All</button>
      <ToastContainer autoClose={1500} position="top-right" />
    </div>
  );
};

export default TodoForm;
