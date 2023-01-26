import React from "react";
// rafce

interface ToDoProps {
  todos: { id: string; text: string }[];
  onDelete: (id: string) => void;
}

const ToDoList = ({ todos, onDelete }: ToDoProps): JSX.Element => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={onDelete.bind(null, todo.id)}>delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ToDoList;
