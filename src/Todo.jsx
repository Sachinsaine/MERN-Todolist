export const Todo = ({ todos }) => {
  return (
    <div>
      <h1>Todo - List</h1>
      <div>
        {todos.map((todo) => {
          return <div key={todo._id}>{todo.title}</div>;
        })}
      </div>
    </div>
  );
};
