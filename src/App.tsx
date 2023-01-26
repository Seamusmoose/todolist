import React, { useState } from "react";
import "./App.css";
import NewToDo from "./components/NewToDo";
import ToDoList from "./components/ToDoList";
import { ToDoModel } from "./components/todo.model";

const App = () => {
  const [todos, settodos] = useState<ToDoModel[]>([]);

  console.log(todos);

  const randomID = Math.random().toString();

  const toDoAddHandler = (text: string) => {
    settodos((prevToDos) => [...prevToDos, { id: randomID, text: text }]);
  };

  const toDoDeleteHandle = (toDoID: string) => {
    settodos((prevToDos) => {
      return prevToDos.filter((todo) => todo.id !== toDoID);
    });
  };

  return (
    <div>
      <NewToDo onAddToDo={toDoAddHandler} />
      <ToDoList onDelete={toDoDeleteHandle} todos={todos} />
    </div>
  );
};

export default App;
