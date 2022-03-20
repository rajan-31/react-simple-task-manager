export default function Task({content, id, deleteTask}) {
    return (
        <div>
            <span>{content}</span>
            <button onClick={() => deleteTask(id)}>&#x2717;</button>
        </div>
    )
}