import { useState } from "react";
import TrashIcon from "../icons/TrashIcon";
import { Id, Task } from "../types";
interface Props {
    task: Task;
    deleteTask: (id: Id) => void;
    updateTask: (id: Id, content: string) => void;
}

function TaskCard({ task, deleteTask, updateTask }: Props) {
    const [mouseIsOver, setMouseIsOver] = useState(false);
    const [editMode, setEditMode] = useState(false);

    const toggleEditMode = () => {
        setEditMode((prev) => !prev);
        setMouseIsOver(false);
    };

    if (editMode) {
        return (
            <div
                className="bg-mainBackgroundColor p-2.5 h-[100px]
                min-h-[100px] items-center flex text-left rounded-xl
                hover:ring-2 hover:ring-inset hover:ring-rose-500 cursor-grab relative">
                <textarea
                    className="
                h-[90%]
                w-full resize-none border-none rounded bg-transparent
                text-white focus:outline-none
                "
                    value={task.content}
                    autoFocus
                    placeholder="Task content here"
                    onBlur={toggleEditMode}
                    onKeyDown={(e) => {
                        if (e.key === "Enter" && e.shiftKey) {
                            toggleEditMode();
                        }
                    }}
                    onChange={(e) => updateTask(task.id, e.target.value)}
                ></textarea>
            </div>
        )
    }
}


export default TaskCard;