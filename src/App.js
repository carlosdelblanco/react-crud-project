import { useSelector } from "react-redux";
import "./App.css";
import TaskForm from "./app/components/TaskForm";

function App() {
  const tasksState = useSelector((state) => state.tasks);
  console.log(tasksState);

  return (
    <div className="App">
      <h1>React project</h1>
      <TaskForm />
    </div>
  );
}

export default App;
