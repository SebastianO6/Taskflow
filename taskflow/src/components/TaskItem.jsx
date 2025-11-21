import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export default function TaskItem({ task }) {
  const { deleteTask, toggleComplete } = useContext(TaskContext);

  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      <div className="task-left">
        <input
          id={`chk-${task.id}`}
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleComplete(task.id)}
          aria-label={`Mark ${task.text} as completed`}
        />
        <label htmlFor={`chk-${task.id}`} className="task-text">
          <span className="task-title">{task.text}</span>
          <span className="task-meta">{task.category}</span>
        </label>
      </div>

      <div className="task-actions">
        <button
          className="btn small"
          onClick={() => deleteTask(task.id)}
          aria-label={`Delete ${task.text}`}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
