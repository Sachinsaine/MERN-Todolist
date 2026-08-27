import { DialogContent, DialogTitle } from "@mui/material";
import Dialog from "@mui/material/Dialog";

import styles from "./DialogBox.module.css";
import { useEffect, useState } from "react";

export const DialogBox = (props) => {
  const { open, close, todo, updateTodo } = props;
  const [title, setTitle] = useState("");
  console.log(todo);

  useEffect(() => {
    if (todo) {
      setTitle(todo.title);
    }
  }, [todo]);
  const handleUpdate = () => {
    if (title.trim() === "") return;
    updateTodo(todo._id, title);
    close();
  };
  return (
    <Dialog
      open={open}
      onClose={close}
      PaperProps={{
        className: styles.dialog,
      }}
    >
      <DialogTitle className={styles.title}>Update Todo</DialogTitle>

      <DialogContent className={styles.content}>
        <input
          className={styles.input}
          type="text"
          placeholder="Enter todo"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          defaultValue={todo?.title || ""}
        />
      </DialogContent>

      <div className={styles.actions}>
        <button className={styles.updateButton} onClick={handleUpdate}>
          Update
        </button>
      </div>
    </Dialog>
  );
};
