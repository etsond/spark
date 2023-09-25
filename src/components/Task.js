import React from 'react';

// Task component representing a single task
const Task = ({ text, onDelete, onEdit }) => {
  return (
    <div className="task">
      <span>{text}</span>
      {/* delete button */}
      <button onClick={onDelete}>Delete</button>
      {/* edit button  */}
      <button onClick={onEdit}>Edit</button>
    </div>
  );
};

export default Task;
