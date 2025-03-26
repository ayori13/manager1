import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "./features/theme/themeSlice";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./styles/main.css"; 

const App = () => {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    document.body.className = theme === "dark" ? "dark-theme" : "light-theme";
  }, [theme]);

  return (
    <div>
      <button onClick={() => dispatch(toggleTheme())}>
        Сменить тему ({theme})
      </button>
      <h1>To-Do List</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default App;
