import React, { useRef } from "react";

type NewToDoProps = {
  onAddToDo: (toDoText: string) => void;
};

const NewToDo = ({ onAddToDo }: NewToDoProps): JSX.Element => {
  const textInputRef = useRef<HTMLInputElement>(null);
  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    onAddToDo(enteredText);
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <div>
        <label htmlFor="todo-text">To do Text</label>
        <input id="todo-text" type="text" ref={textInputRef} />
      </div>
      <button>Add</button>
    </form>
  );
};

export default NewToDo;
