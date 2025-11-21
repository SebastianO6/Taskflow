import React, { useState, useContext }  from 'react'
import { TaskContext } from '../context/TaskContext' 

export default function TaskForm() {
  const { addText } = useContext(TaskContext)

  const [text, setText] = useState("")
  const [category, setCategory] = useState("General")
  const [error, setError] = useState("")

  const categories = ["General", "Work", "School", "Personal", "Learning"]

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) {
      setError("Please enter a task")
      return
    }
  }

  const newTask = {
    id: Date.now().toString(),
    text: trimmed,
    categories,
    completed: false,
    createdAt: new Date().toISOString
  }
  
  addTask(newTask)
  setText("")
  setCategory("General")
  setError("") 
}

return(
  <form className='taskform'onSubmit={handleSubmit}>
    <div className="taskform-row">
      <input
        className='input text-input'
        type='text'
        placeholder='Add a new task...'
        value={text}
        onChange={(e) => setText(e.target.value)}
        aria-label='Task text'
      />

      <select
        className='input select-input'
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        aria-label="category"
      >
        {categories.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
      <button className='btn primary' type='submit' aria-label='Add Text'>
        Add
      </button>
    </div>
    {error && <div className='error'>{error}</div>}
  </form>
)