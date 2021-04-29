import React from "react";
import { TodoItem } from "./TodoItem";

export const Todos1 = (props) => {
  return (
    <div className="container">
      {props.todos.length === 0
        ? "Your todos list is empty"
        : props.todos.map((todo) => {
            return (
              <TodoItem key={todo.sno} todo={todo} ondelete={props.ondelete} />
            );
          })}
      {/*  
        <TodoItem todo={props.todos[0]}/>  
        <TodoItem todo={props.todos[1]}/>    
         <TodoItem todo={props.todos[2]}/> */}
    </div>
  );
};
