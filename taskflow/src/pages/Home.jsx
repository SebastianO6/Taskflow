import React, { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskForm from "../components/TaskForm";
import Filters from "../components/Filters";
import TaskList from "../components/TaskList";
import Stats from "../components/Stats";

export default function Home() {
  const { tasks } = useContext(TaskContext);

  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [showCompleted, setShowCompleted] = useState(true);

  return (
    <div className="container">
      <header className="header">
        <h1>TaskFlow</h1>
        <p className="muted">A small productivity dashboard</p>
      </header>

      <main className="main-grid">
        <section className="panel">
          <TaskForm />
          <Filters
            search={search}
            setSearch={setSearch}
            categoryFilter={categoryFilter}
            setCategoryFilter={setCategoryFilter}
            showCompleted={showCompleted}
            setShowCompleted={setShowCompleted}
          />
          <TaskList
            tasks={tasks}
            search={search}
            categoryFilter={categoryFilter}
            showCompleted={showCompleted}
          />
        </section>

        <aside className="sidebar panel">
          <Stats tasks={tasks} />
        </aside>
      </main>
    </div>
  );
}
