import React from "react";
import TaskItem from "./TaskItem";

export default function TaskList({ tasks, search, categoryFilter, showCompleted }) {
  const filtered = tasks
    .filter((t) => {
      if (!showCompleted && t.completed) return false;
      if (categoryFilter !== "All" && t.category !== categoryFilter) return false;
      if (search && !t.text.toLowerCase().includes(search.toLowerCase())) return false;
      return true;
    })
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  if (filtered.length === 0) {
    return <div className="empty">No task found.</div>;
  }

  return (
    <div className="task-list">
      {filtered.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
}
