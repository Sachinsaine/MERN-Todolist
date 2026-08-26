import styles from "./todo.module.css";

export const Todo = ({ todos, removeTodo, handleCompleted }) => {
  return (
    <div className={styles.list}>
      {todos.map((todo) => (
        <div className={styles.item} key={todo._id}>
          <span
            className={`${styles.title} ${
              todo.completed ? styles.completed : ""
            }`}
            onClick={() => handleCompleted(todo.completed, todo._id)}
          >
            {todo.title}
          </span>

          <button
            className={styles.removeButton}
            onClick={() => removeTodo(todo._id)}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};
