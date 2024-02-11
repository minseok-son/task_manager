import styles from "./Task.module.css";
import { useState } from "react";
import TaskModal from "../TaskModal/TaskModal.jsx";

function Task({ index, task, handleRerender }) {
    const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);

    return (
        <>
            <div
                className={styles.taskCard}
                onClick={() => {
                    setIsTaskModalOpen(true);
                }}
            >
                <div className={styles.taskTitle}>{task.title}</div>
                <div>Points: {task.points}</div>
            </div>

            {isTaskModalOpen && (
                <TaskModal
                    task={task}
                    setIsTaskModalOpen={setIsTaskModalOpen}
                    handleRerender={handleRerender}
                />
            )}
        </>
    );
}

export default Task;
