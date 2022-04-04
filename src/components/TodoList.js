import Todo from "./Todo";

export default function TodoList({ todos, setTodos, filteredTodos }) {
  return (
    <div className="todo-container">
      {todos.length > 0 ? (
        <ul className="todo-list">
          {filteredTodos.map((todo) => (
            <Todo todos={todos} setTodos={setTodos} key={todo.id} todo={todo} text={todo.text} />
          ))}
        </ul>
      ) : (
        <p className="no-todo">Tidak ada Todo</p>
      )}
    </div>
  );
}
