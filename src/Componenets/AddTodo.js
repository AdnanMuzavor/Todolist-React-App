import React from "react";
import './container.css';
import {useState} from 'react';

export const AddTodo = ({addTodo}) => {
    const [title,settitle]= useState("");
    const [description,setdescription]= useState("");

    const submit =(e)=>{
        e.preventdefault();
        if(!title||!description){
            alert("Title or Description cannotb be blank");
        }
        addTodo(title,description);
    }
  return (
    <div className="Container my-3">
      <h3>Add a Todo</h3>
      <div>
        <form className="my-3" onSubmit={submit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Todo Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e)=>settitle(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Todo description
            </label>
            <input
              type="text"
              value={description}
              onChange={(e)=>setdescription(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
