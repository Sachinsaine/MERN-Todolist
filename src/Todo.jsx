export const Todo = ({ todos }) => {
  return (
    <div>
      <h1>Todo - List</h1>
      <div>
        {todos.map((todo) => {
          return <div>{todo.title}</div>;
        })}
      </div>
    </div>
  );
};
