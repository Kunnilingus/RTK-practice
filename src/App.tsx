import { useState } from "react";
import "./App.css";
import { ITodo } from "./models/ITodo";
import TodoList from "./components/TodoList";
import InputField from "./components/InputField";

function App() {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [text, setText] = useState<string>("");
  const addTodo = () => {
    if (text.trim().length) {
      setTodos([
        ...todos,
        {
          id: new Date().toISOString(),
          text,
          completed: false,
        },
      ]);
    }
    setText("");
  };
  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const toggleTodoComplited = (todoId: string) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== todoId) return todo;
        return {
          ...todo,
          completed: !todo.completed,
        };
      })
    );
  };
  return (
    <div className="App">
      <InputField text={text} handleText={setText} addTodo={addTodo} />
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodoComplited}
      />
    </div>
  );
}

export default App;
