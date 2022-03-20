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
        <form onSubmit={onSubmit} className="grid grid-cols-3 gap-8 text-lg ">
            <input type="text" placeholder="Add new Task..."
            value={newTask} 
            onChange={(e) => setNewTask(e.target.value)}
            className="rounded col-span-2 p-1
            outline-0 
            border-2 border-gray-300 focus:border-rose-500"
            />

            <button type="submit"
            className="rounded-md p-1
            text-white
            outline-0
            bg-emerald-600 hover:bg-emerald-700"
            >Add Task</button>
        </form>
    )
}