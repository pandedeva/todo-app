import "./App.css";
import { useState, useEffect } from "react";
// importing components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  // state
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [message, setMessage] = useState("");

  // run once when the app start
  useEffect(() => {
    getLocalTodos();
  }, []);
  // use effect
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  // function
  const filterHandler = () => {
    switch (status) {
      case "completed": // kalau todos nya completed, buat array baru yang hanya berisi status completed
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted": // kalau todos nya uncompleted, buat array baru yang hanya berisi status uncompleted
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default: // tampilkan semua isi todos
        setFilteredTodos(todos);
        break;
    }
  };

  // save to local
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Deva Todo List</h1>
      </header>
      <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} setStatus={setStatus} setMessage={setMessage} message={message} />
      <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} />
    </div>
  );
}

export default App;
