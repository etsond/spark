import React, { useState, useEffect } from 'react';
import './App.css';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import { auth, provider } from './firebase'; // Import Firebase authentication

function App() {
  // State for tasks and user
  const [tasks, setTasks] = useState([]);
  const [user, setUser] = useState(null);

  // Function to handle user login
  const login = async () => {
    try {
      await auth.signInWithPopup(provider);
    } catch (error) {
      console.error(error);
    }
  };

  // Function to handle user logout
  const logout = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // Listener for authentication state changes
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe(); // Cleanup on component unmount
  }, []);

  // Function to add a new task
  const addTask = (text) => {
    setTasks([...tasks, text]);
  };

  // Function to delete a task
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  // Function to edit a task
  const editTask = (index, newText) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = newText;
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      {user ? (
        // If user is logged in, show logout button, task form, and task list
        <>
          <button onClick={logout}>Logout</button>
          <TaskForm addTask={addTask} />
          <TaskList tasks={tasks} onDelete={deleteTask} onEdit={editTask} />
        </>
      ) : (
        // If user is not logged in, show login button
        <button onClick={login}>Login with Google</button>
      )}
    </div>
  );
}

export default App;
