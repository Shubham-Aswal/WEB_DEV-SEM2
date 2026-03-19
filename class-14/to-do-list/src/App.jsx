import { useState } from 'react'
import './App.css'

function App() {
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState([])

  const addTask = () => {
    if (!task.trim()) return
    setTasks((prev) => [...prev, { id: Date.now(), text: task.trim(), completed: false }])
    setTask('')
  }

  const toggleComplete = (id) => {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)))
  }

  const pendingTasks = tasks.filter((t) => !t.completed)
  const completedTasks = tasks.filter((t) => t.completed)
  const [filter, setFilter] = useState('all')

  const getFilteredTasks = () => {
    if (filter === 'completed') return completedTasks
    if (filter === 'pending') return pendingTasks
    return tasks
  }

  return (
    <main className="app-container">
      <h1>Task Filter App</h1>
      <p className="hint">Click any task to toggle complete; choose a section tab to filter.</p>

      <div className="task-input-row">
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter task..."
          aria-label="Task"
          onKeyDown={(e) => e.key === 'Enter' && addTask()}
        />
        <button onClick={addTask}>Add</button>
      </div>

      <div className="filter-row">
        <button className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>
          All ({tasks.length})
        </button>
        <button className={filter === 'pending' ? 'active' : ''} onClick={() => setFilter('pending')}>
          Pending ({pendingTasks.length})
        </button>
        <button className={filter === 'completed' ? 'active' : ''} onClick={() => setFilter('completed')}>
          Completed ({completedTasks.length})
        </button>
      </div>

      <section className="task-section">
        <h2>{filter === 'all' ? 'All tasks' : filter === 'pending' ? 'Pending tasks' : 'Completed tasks'}</h2>
        {getFilteredTasks().length === 0 ? (
          <p className="empty">No tasks in this section.</p>
        ) : (
          <ul>
            {getFilteredTasks().map((t) => (
              <li key={t.id} className={t.completed ? 'done' : ''} onClick={() => toggleComplete(t.id)}>
                {t.text}
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  )
}

export default App
