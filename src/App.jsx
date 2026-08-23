import { useEffect, useState } from "react";

import "./App.css";
import { Todo } from "./Todo";

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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
  return (
    <div>
      <Todo todos={todos} />
    </div>
  );
}

export default App;
