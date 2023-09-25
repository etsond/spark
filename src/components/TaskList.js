import React from 'react';
import Task from './Task';

// displaying the list of tasks
const TaskList = ({ tasks, onDelete, onEdit }) => {
  return (
    <div className="task-list">
      {tasks.map((task, index) => (
        <Task
          key={index}
          text={task}
          onDelete={() => onDelete(index)} //delete function passed to task
          onEdit={() => onEdit(index)} //edit function passed to task
        />
      ))}
    </div>
  );
};

export default TaskList;
