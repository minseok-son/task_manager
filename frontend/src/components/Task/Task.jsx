import styles from "./Task.module.css";
import { handleDeleteTask } from "../../util/util.js";

function Task({ task, onClick }) {
    return (
        <div
            className={styles.taskCard}
            onClick={() => {
                handleDeleteTask(task), onClick();
            }}
        >
            <div className={styles.taskTitle}>{task.info}</div>
            <div>{task.points}</div>
            {/* <button
                className={styles.button}
                onClick={() => {
                    handleDeleteTask(task), onClick();
                }}
            >
                SELECT
            </button> */}
        </div>
    );
}

export default Task;
