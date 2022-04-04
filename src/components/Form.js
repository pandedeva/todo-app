export default function Form({ setInputText, inputText, setTodos, todos, setStatus, setMessage, message }) {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault(); // agar tidak merefresh page

    if (!inputText) {
      // kalau input text tidak bernilai true
      return setMessage("Kolom tidak boleh kosong!");
    }
    setMessage(""); // kalau kolom sudah berisi hilangkan isi setMessage

    setTodos([...todos, { text: inputText, completed: false, id: Date.now() }]);
    setInputText(""); // kalau sudah di submit, kosongkan kolom input
  };

  const statusHandler = (e) => {
    setStatus(e.target.value); // mengambil kategori
  };

  return (
    <form>
      <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" placeholder={message} />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}
