import { useEffect, useState } from "react";

import { Todo } from "./Todo";
import { TodoForm } from "./TodoForm";
import styles from "./app.module.css";
function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const addTodo = async (todo) => {
    try {
      const response = await fetch("http://localhost:4000/api/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: todo }),
      });

      if (!response.ok) {
        throw new Error("Failed to create todo");
      }

      const newTodo = await response.json();
      setTodos((prevTodo) => [...prevTodo, newTodo]);
    } catch (err) {
      setError(err.message);
    }
  };

  const removeTodo = async (id) => {
    try {
      const response = await fetch(`http://localhost:4000/api/todos/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to Delete todo");
      }

      setTodos((prevtodos) => prevtodos.filter((todo) => todo._id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  const handleCompleted = async (completed, id) => {
    try {
      console.log("Before:", completed);
      console.log("ID:", id);
      console.log("Sending:", !completed);

      const response = await fetch(`http://localhost:4000/api/todos/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          completed: !completed,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to update todo");
      }

      const updatedTodo = await response.json();

      console.log("Updated from API:", updatedTodo);

      setTodos((prevTodos) =>
        prevTodos.map((todo) => (todo._id === id ? updatedTodo : todo)),
      );
    } catch (err) {
      setError(err.message);
    }
  };

  const updateTodo = async (id, title) => {
    try {
      const response = await fetch(`http://localhost:4000/api/todos/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to updated todo");
      }

      const updated = await response.json();

      setTodos((prevTodo) =>
        prevTodo.map((todo) => (todo._id === id ? updated : todo)),
      );
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    async function fetchTodos() {
      try {
        const fetchApi = await fetch("http://localhost:4000/api/todos");

        if (!fetchApi.ok) {
          throw new Error("Failed to fetch Tods.");
        }
        const data = await fetchApi.json();
        console.log("API DATA:", data);
        setTodos(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchTodos();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  const totalTodos = todos.length;
  const completedTodos = todos.filter((todo) => todo.completed).length;
  const notCompletedTodos = totalTodos - completedTodos;

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <TodoForm
          addTodo={addTodo}
          totalTodos={totalTodos}
          completedTodos={completedTodos}
          notCompletedTodos={notCompletedTodos}
        />

        <Todo
          todos={todos}
          removeTodo={removeTodo}
          handleCompleted={handleCompleted}
          updateTodo={updateTodo}
        />
      </div>
    </div>
  );
}

export default App;
