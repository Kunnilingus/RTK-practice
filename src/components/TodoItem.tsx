import { FC } from "react";
import { useAppDispatch } from "../hooks/hooks";
import { deleteTodo, toggleTodoCompleted } from "../store/todoSlice";

interface TodoItemProps {
  id: number;
  text: string;
  completed: boolean;
}
const TodoItem: FC<TodoItemProps> = ({ id, text, completed }) => {
  const dispatch = useAppDispatch();
  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleTodoCompleted(id))}
      />
      <span>{text}</span>
      <span
        onClick={() => dispatch(deleteTodo(id))}
        style={{ color: "red", cursor: "pointer" }}
      >
        &times;
      </span>
    </li>
  );
};

export default TodoItem;
