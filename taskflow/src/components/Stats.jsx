import React from "react";

export default function Stats({ tasks }) {
  const total = tasks.length;
  const completed = tasks.filter((t) => t.completed).length;

  // tasks per category
  const perCategory = tasks.reduce((acc, t) => {
    acc[t.category] = (acc[t.category] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="stats">
      <div className="stat">
        <div className="stat-number">{total}</div>
        <div className="stat-label">Total</div>
      </div>

      <div className="stat">
        <div className="stat-number">{completed}</div>
        <div className="stat-label">Completed</div>
      </div>

      <div className="stat categories">
        {Object.keys(perCategory).length === 0 ? (
          <div className="muted">No categories yet</div>
        ) : (
          Object.entries(perCategory).map(([cat, count]) => (
            <div key={cat} className="cat-item">
              {cat}: <strong>{count}</strong>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
