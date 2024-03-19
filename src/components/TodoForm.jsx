import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };
  return (
    <form className="todoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={value}
        placeholder="Tâches du Jour"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button type="submit" className="todo-btn">
        Tâche
      </button>
    </form>
  );
};

export default TodoForm;
