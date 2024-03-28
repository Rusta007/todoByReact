import React from "react";

function TodoInput({ type, name, value, onChange, id }) {
  return (
    <>
      <input
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        id={id}
      />
    </>
  );
}

export default TodoInput;
