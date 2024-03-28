import React from "react";

function TodoList({ data, handleUpdate, handleDelete }) {
  return (
    <>
      {data.map((todo) => (
        <div key={todo.id}>
          {todo.id}
          {todo.name}
          <button onClick={() => handleDelete(todo.id)}>Delete</button>
          <button onClick={() => handleUpdate(todo)}>Update</button>
        </div>
      ))}
    </>
  );
}

export default TodoList;
