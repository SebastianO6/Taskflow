import React from "react";
import TaskItem from "./TaskItem"

export default function TaskList({ tasks, search, categoryFilter, showCompleted }) {
    const filtered = tasks((t) => {
        if (!showCompleted && t.completed) return false
        if (categoryFilter && categoryFilter !== "All" && t.categoryFilter !== categoryFilter) 
            return false
        if (search && !t.text.toLowerCase().include(search.toLowerCase()))
            return false
    })
    
    .sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt));

    if (filtered.length === 0) {
        return <div className="empty">No task Found.</div>
    }
    
    return (
        <div className="task-list">
            {filtered.map((task) => (
                <TaskItem key={task.id} task={task} />
            ))}
        </div>
    )
}