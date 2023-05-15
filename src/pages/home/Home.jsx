import React from 'react';
import "./home.css";

export default function Home() {
  return (
    <div className='homepage'>
      <div className="home-container">
        <div className="home-header">
          <h2>Task Manager</h2>
          <button className="glass-buttons">+ Add Task</button>
        </div>
        <br />
        <div className="tasks">
          <div className="task-box">
            <h3>Task-1</h3>
            <p>task 1 details</p>
          </div>
          <div className="task-box">
            <h3>Task-2</h3>
            <p>task 2 details</p>
          </div>
          <div className="task-box">
            <h3>Task-3</h3>
            <p>task 1 details</p>
          </div>
          <div className="task-box">
            <h3>Task-4</h3>
            <p>task 2 details</p>
          </div>
        </div>
        <button className="glass-buttons">Logout</button>
      </div>
    </div>
  )
}
