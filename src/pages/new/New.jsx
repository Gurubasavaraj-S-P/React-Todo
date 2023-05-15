import React from 'react';
import "./new.css";

export default function New() {
  return (
    <>
    <div className="homepage">
        <div className="home-container">
            <div className="home-header">
                <h2>New Task</h2>
                <button className="glass-buttons">← Back</button>
            </div>
            <div className="tasks">
                <form>
                    <input className="tit" type="text" name="title" placeholder="Task Title"/>
                    <input className="des" type="text" name="description" placeholder="Task Description"/>
                    <button className="glass-buttons">Add</button>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}
