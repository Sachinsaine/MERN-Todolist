import { useState } from "react";
import "./App.css";
import styles from "./todoForm.module.css";
export const TodoForm = ({ addTodo }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input.trim()) return;

    addTodo(input);
    setInput("");
  };

  return (
    <div className={styles.formContainer}>
      <h4 className={styles.heading}>TODO - List</h4>

      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          placeholder="Add Todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button className={styles.addButton} type="submit">
          Add
        </button>
      </form>
    </div>
  );
};
