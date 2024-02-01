import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import InputField from "./components/InputField";
import { useAppDispatch } from "./hooks/hooks";
import { addTodo } from "./store/todoSlice";
import { Link } from "react-router-dom";

function App() {
  const [text, setText] = useState<string>("");
  // const deleteTodo = (id: number) => {
  //   setTodos(todos.filter((todo) => todo.id !== id));
  // };
  // const toggleTodoComplited = (todoId: number) => {
  //   setTodos(
  //     todos.map((todo) => {
  //       if (todo.id !== todoId) return todo;
  //       return {
  //         ...todo,
  //         completed: !todo.completed,
  //       };
  //     })
  //   );
  // };
  const dispatch = useAppDispatch();
  const addTask = () => {
    dispatch(addTodo(text));
    setText("");
  };
  return (
    <div className="App">
      <Link to="/goods">Go to goods page</Link>
      <InputField text={text} handleText={setText} addTodo={addTask} />
      <TodoList />
    </div>
  );
}

export default App;
