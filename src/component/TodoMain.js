import React, { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function TodoMain() {
  const [data, setData] = useState({
    name: "",
    id: "",
  });
  const [allTodo, setAllTodo] = useState([]);

  const handleChange = (e) => {
    setData({
      name: e.target.value,
      id: data.id || Date.now(),
    });
  };

  const handleUpdate = (data) => {
    setData({
      ...data,
    });
  };

  const handleDelete = (id) => {
    // console.log(id);
    setAllTodo(allTodo.filter((todo) => todo.id !== id));
  };

  const handleButton = (e) => {
    e.preventDefault();
    // const existingTodoIndex = allTodo.findIndex((todo) => todo.id === data.id);
    const existingTodoIndex = allTodo.find((todo) => todo.id === data.id);
    console.log(existingTodoIndex);
    if (existingTodoIndex) {
      allTodo.forEach((arr) =>
        arr.id == data.id ? (arr.name = data.name) : ""
      );
    } else {
      setAllTodo([...allTodo, data]);
    }
    setData({
      name: "",
      id: "",
    });
  };

  return (
    <>
      <TodoInput
        name="data"
        value={data.name}
        onChange={handleChange}
        type="text"
        id="data"
      />
      <button onClick={handleButton}>Save</button>
      <TodoList
        data={allTodo}
        handleUpdate={handleUpdate}
        handleDelete={handleDelete}
      />
    </>
  );
}

export default TodoMain;
