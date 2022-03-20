import Task from "./Task"

export default function Container({tasks, deleteTask}) {
    return (
        <>
            {tasks.map((item) => 
                <Task key={item.id} id={item.id} content={item.content} 
                deleteTask={deleteTask} 
                />
            )}
        </>
    )
}