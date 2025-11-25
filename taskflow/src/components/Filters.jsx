import React from "react";

export default function Filters({
    search,
    setSearch,
    categoryFilter,
    setCategoryFilter,
    showCompleted,
    setShowCompleted
}){

    const categories = ["All", "General", "Work", "School", "personal", "Learning"]

    return (
        <div className="filters">
            <input
                className="input"
                type="search"
                value={search}
                placeholder="Search tasks..."
                onChange={(e) => setSearch(e.target.value)}
                aria-label="Search tasks"
            />

            <select 
                className="input"
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
            >
                {categories.map((c) => (
                    <option key={c} value={c}>
                        {c}
                    </option>
                ))}
            </select>


            <label className="show-completed">
                <input 
                    type="checkbox"
                    checked={showCompleted}
                    onChange={(e) => setShowCompleted(e.target.value)}
                    aria-label="Show completed tasks"
                />
                Show Completed    
            </label> 
        </div>
    )
}