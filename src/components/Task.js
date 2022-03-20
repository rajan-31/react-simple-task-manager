export default function Task({content, id, deleteTask}) {
    return (
        <div className="bg-orange-400
        rounded border border-black
        mb-1 p-1 text-lg
        flex flex-row
        ">
            <div className="p-1 text-white text-justify basis-11/12">{content}</div>
            <div className="basis-1/12 flex justify-center">
                <button className="py-1 px-2 text-rose-600 text-lg" 
                onClick={() => deleteTask(id)}>&#x2717;
                </button>
            </div>
        </div>
    )
}