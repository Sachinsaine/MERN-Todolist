import { useState } from "react";
import { DialogBox } from "./DialogBox";
import styles from "./todo.module.css";

export const Todo = (props) => {
  const { todos, removeTodo, handleCompleted, updateTodo } = props;
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState(null);
  const handleOpen = (todo) => {
    setOpenDialog(true);
    setSelectedTodo(todo);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  return (
    <div className={styles.list}>
      {todos.length === 0 ? (
        <h1 style={{ textAlign: "center", color: "#fff", margin: "0px" }}>
          Empty todos
        </h1>
      ) : (
        todos.map((todo) => (
          <div className={styles.item} key={todo._id}>
            <span
              className={`${styles.title} ${
                todo.completed ? styles.completed : ""
              }`}
              onClick={() => handleCompleted(todo.completed, todo._id)}
            >
              <span onClick={() => handleOpen(todo)}>{todo.title}</span>
            </span>

            <button
              className={styles.removeButton}
              onClick={() => removeTodo(todo._id)}
            >
              Remove
            </button>
            <DialogBox
              open={openDialog}
              close={handleClose}
              todo={selectedTodo}
              updateTodo={updateTodo}
            />
          </div>
        ))
      )}
    </div>
  );
};
