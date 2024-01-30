import { FC } from "react";
import { ITodo } from "../models/ITodo";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: ITodo[];
  deleteTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
}

const TodoList: FC<TodoListProps> = ({ todos, deleteTodo, toggleTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <TodoItem
            id={todo.id}
            text={todo.text}
            completed={todo.completed}
            deleteTodo={() => deleteTodo(todo.id)}
            toggleTodo={() => toggleTodo(todo.id)}
          />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
