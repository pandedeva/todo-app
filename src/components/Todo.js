export default function Todo({ text, todo, todos, setTodos }) {
  // Events
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
    // todo.filter itu memproduksi array baru
    // jika el.id tidak sama dengan todo.id, tampilkan di array baru
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed, // completed itu false, lalu ubah jadi true
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}
