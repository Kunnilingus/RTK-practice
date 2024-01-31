import { FC } from "react";
import TodoItem from "./TodoItem";
import { useAppSelector } from "../hooks/hooks";

const TodoList: FC = () => {
  const  {todos}  = useAppSelector((state) => state.todo);
  return (
    <ul>
      {todos &&
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
    </ul>
  );
};

export default TodoList;
