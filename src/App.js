
import Header from './Componenets/header';
import Footer from './Componenets/footer';
import {Todos1} from './Componenets/Todos1';
import React,{useState} from 'react';
import {AddTodo} from './Componenets/AddTodo';
function App() {
  const ondelete=(todo)=>{
    console.log("On delete activated",todo);
    settodos(todos.filter((e)=>{
      return e!==todo;
    }))
    localStorage.getItem("todos");
    /* This will deleye item from storage once it is deleted from list\t*/
  }


const addTodo=(title,description)=>{
   
if(todos.length===0){
todos.sno=0;
}
else{
  todos.sno = todos[todos.length-1].sno +1;
  }
  
    const myTodo={
     sno: todos.sno,
      title: title,
      description: description
    }
 
    settodos([...todos,myTodo]);
    console.log("mytodos:",myTodo);
    localStorage.setItem("todos",JSON.stringify(todos));
    /* Adding newly added item in storage so that it getsw retained
     */
    console.log("sno is:",todos.sno);
  }

  const [todos,settodos]= useState([]);

  return (
    <>
    <Header/>
    <hr></hr>
    
    <AddTodo addTodo={addTodo}/>
    
    <h1 className="text-center">Todos List</h1>
    <Todos1 todos={todos} ondelete={ondelete}/>
    <Footer/>
    </>
  );
}

export default App;
