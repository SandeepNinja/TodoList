import React from "react";
import Task from "./Task";
function Tasks(props) {
  const { tasks, handleChangeTitle, handleDeleteTask, handleCompleted } = props;
  return (
    <div className="tasksContainer">
    // iterate over each task
      {tasks.length > 0 &&
        tasks.map((task) => {
          return (
            // individual task
            <Task
              task={task}
              key={task.id}
              handleChangeTitle={handleChangeTitle}
              handleDeleteTask={handleDeleteTask}
              handleCompleted={handleCompleted}
            />
          );
        })}
    </div>
  );
}

export default Tasks;
