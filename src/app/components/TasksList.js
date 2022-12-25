import { useSelector } from "react-redux";

function TasksList() {
  const tasks = useSelector((state) => state.tasks);

  const handleDelete = (id) => {
    console.log(id);
  };

  return (
    <div>
      {tasks?.map((task) => (
        <div key={task.id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <button onClick={() => handleDelete(task.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default TasksList;
