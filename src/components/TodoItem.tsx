import { FC } from "react";

interface TodoItemProps {
  id: string;
  text: string;
  completed: boolean;
  deleteTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
}
const TodoItem: FC<TodoItemProps> = ({
  id,
  text,
  completed,
  deleteTodo,
  toggleTodo,
}) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleTodo(id)}
      />
      <span>{text}</span>
      <span
        onClick={() => deleteTodo(id)}
        style={{ color: "red", cursor: "pointer" }}
      >
        &times;
      </span>
    </li>
  );
};

export default TodoItem;
