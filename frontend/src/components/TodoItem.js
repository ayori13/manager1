import { useDispatch } from "react-redux";
import { removeTodo, toggleTodo } from "../features/todos/todosSlice";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <li>
      <span
        onClick={() => dispatch(toggleTodo(todo.id))}
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      >
        {todo.text}
      </span>
      <button onClick={() => dispatch(removeTodo(todo.id))}>Удалить</button>
    </li>
  );
};

export default TodoItem;
