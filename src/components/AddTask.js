import { useState } from "react"

export default function AddTask({addTask}) {
    const [newTask, setNewTask] = useState("")

    const onSubmit = (e) => {
        e.preventDefault()

        if(!newTask) {
            alert("Can't create empty task!")
            return
        }

        addTask(newTask)

        setNewTask("")
    }

    return (
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="Add new Task..."
            value={newTask} 
            onChange={(e) => setNewTask(e.target.value)} 
            />

            <button type="submit">Add Task</button>
        </form>
    )
}