import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import TaskForm from "./app/components/TaskForm";
import TasksList from "./app/components/TasksList";

function App() {
  return (
    <div className="App">
      <h1>TaskList project using React</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TasksList />} />
          <Route path="/create-task" element={<TaskForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
