import Header from "./Componenets/header";
import Footer from "./Componenets/footer";
import {About} from "./Componenets/About";
import { Todos1 } from "./Componenets/Todos1";
import React, { useState,useEffect } from "react";
import { AddTodo } from "./Componenets/AddTodo";
import { BrowserRouter as Router,Route,
Switch,
Link } from "react-router-dom";


function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const ondelete = (todo) => {
    console.log("On delete activated", todo);
    settodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
    /* This will deleye item from storage once it is deleted from list\t*/
  };

  const addTodo = (title, description) => {
    if (todos.length === 0) {
      todos.sno = 0;
    } else {
      todos.sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      sno: todos.sno,
      title: title,
      description: description,
    };

    settodos([...todos, myTodo]);
    console.log("mytodos:", myTodo);

    console.log("sno is:", todos.sno);
  };

  const [todos, settodos] = useState(initTodo);
  useEffect(()=>{  
    localStorage.setItem("todos", JSON.stringify(todos));
    /* Adding newly added item in storage so that it getsw retained
     */
  
    
  },[todos])
  
  return (
    <>
    <Router>
      <Header />
      <hr></hr>
      <Switch>
  <Route exact path="/" render={()=>
    {
      return(
<>
<AddTodo addTodo={addTodo} />

<h1 className="text-center">Todos List</h1>

<Todos1 todos={todos} ondelete={ondelete} />
</>
      )}}>

   

</Route>

<Route path="/about">

<About/>
</Route>
</Switch>
     
      <Footer />
      </Router>
    </>
  );
}

export default App;
