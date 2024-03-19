import React, { useState } from "react";

const TodoForm = ({addTodo}) => {
  const [value, setValue] = useState("");
  const handleChange =(e)=>{
    e.preventDefault();
    addTodo(value);
    setValue("")
  }
  return (
    <form className="todoForm" onSubmit={handleChange}>
      <input
        type="text"
        value={value}
        className="todo-input"
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
