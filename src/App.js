
import Header from './Componenets/header';
import Footer from './Componenets/footer';
import {Todos1} from './Componenets/Todos1';
import React,{useState} from 'react';
import {AddTodo} from './Componenets/AddTodo';
function App() {
  const ondelete=(todo)=>{
    console.log("On delete activated",todo);
    settodos(todos.filter((e)=>{
      return e!=todo;
    }))
  }


  const [todos,settodos]= useState(
 [
  { sno:1,
    title:"Todo number one",
    description:" Going to get todo number 1"

  },
  { sno:2,
    title:"Todo number two",
    description:" Going to get todo number 2"

  },
  { sno:3,
    title:"Todo number three",
    description:" Going to get todo number 3"

  },

]);

  return (
    <>
    <Header/>
    <hr></hr>
    <AddTodo/>
    <h1 className="text-center">Todos List</h1>
    <Todos1 todos={todos} ondelete={ondelete}/>
    <Footer/>
    </>
  );
}

export default App;
