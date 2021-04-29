import React from "react";
export const TodoItem = ({ todo, ondelete }) => {
  return (
    <>
      <h4>{todo.title}</h4>
      <p>{todo.description}</p>
      <button
        className="btn btn-danger"
        onClick={() => {
          ondelete(todo);
        }}
      >
        Delete
      </button>
      <hr></hr>
    </>
  );
};
