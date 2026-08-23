import { useState } from "react";

export const TodoForm = ({ addTodo }) => {
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input.trim()) return;
    console.log(input);
    addTodo(input);
    setInput("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h4>TODO FORM</h4>
        <div>
          <label htmlFor="">Add Todo</label>
          <input
            type="text"
            placeholder="Add Todo"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
};
