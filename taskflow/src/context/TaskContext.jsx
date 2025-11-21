import { Children, createContext, useState } from "react";

export const TaskContext = createContext()

export function Taskprovider({ children }) {
    const [tasks, setTasks] = useState([])

    const addTask = (task) => {
        setTasks([...tasks, task])
    }

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id))
    }

    const toggleComplete = (id) => {
        setTasks(tasks.map(task => task.id === id ? {...task, complete: !task.completed} : task
        ))
    }
}

return (
    <TaskContext.Provider value = {{
            tasks,
            addTask,
            deleteTask,
            toggleComplete
        }}
    >
        {children}            
    </TaskContext.Provider>
)