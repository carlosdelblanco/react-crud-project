import "./App.css";
import TaskForm from "./app/components/TaskForm";
import TasksList from "./app/components/TasksList";

function App() {
  return (
    <div className="App">
      <h1>React project</h1>
      <TaskForm />
      <TasksList />
    </div>
  );
}

export default App;
