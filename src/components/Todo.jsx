import React from "react";

const Todo = ({ todo, removeTodo, completeTodo }) => {
  const classTodoName = todo.isCompleted ? "todo-completed" : "todo";
  return (
    <div
      className={classTodoName}
    >
      <div className="content">
        <p>{todo.text}</p>
        <p className="category">({todo.category})</p>
      </div>
      <div>
        <button className="complete" onClick={() => completeTodo(todo.id)}>
          Completar
        </button>
        <button className="remove" onClick={() => removeTodo(todo.id)}>
          X
        </button>
      </div>
    </div>
  );
};

export default Todo;
