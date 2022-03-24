import Task from "./Task"
import { useSelector } from "react-redux";

export default function Container() {
    const tasks = useSelector((state) => state.tasks.value);

    return (
        <div className="mt-6">
            {tasks.map((item) => 
                <Task key={item.id} id={item.id} content={item.content} 
                />
            )}
        </div>
    )
}