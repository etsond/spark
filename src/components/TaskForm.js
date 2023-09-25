import React, { useState } from 'react';

function TaskForm({ addTask }) {
  // State for the input field value
  const [text, setText] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== '') { // Check if input is not empty or just spaces
      addTask(text); // Call the parent function to add a new task
      setText(''); // Reset the input field
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
