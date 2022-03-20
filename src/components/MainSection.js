import { useState } from 'react';

import Container from './Container';
import AddTask from './AddTask';

export default function MainSection() {
    /* const allTasks = [
        {
            id: 1,
            content: "abc"
        },
        {
            id: 2,
            content: "pqr"
        },
        {
            id: 3,
            content: "mnp"
        }
    ] */

    const [tasks, setTasks] = useState([]);

    const deleteTask = (id) => {
        setTasks(tasks.filter(item => item.id !== id))
    };

    const addTask = (content) => {
        setTasks([...tasks, {
            id: tasks.length>0 ? tasks[tasks.length-1].id+1 : 1,
            content: content
        }])
    }

    return (
        <div className="pt-4 px-10">
            <AddTask addTask={addTask} />
            <Container tasks={tasks} deleteTask={deleteTask} />
        </div>
    )
}