import {useEffect, useState} from "react"
import {getTasks} from '../api/tasks.api'
import { TaskCard } from "./TaskCard";

export function TasksList() {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        async function loadTasks() {
            const ans = await getTasks();
            setTasks(ans.data);
        }
        loadTasks();
    }, []);

    return (
        <div className="grid grid-cols-2 gap-3">
            {tasks.map(task => (
                <TaskCard key={task.id} task={task}/>
            ))}
        </div>
    );
}