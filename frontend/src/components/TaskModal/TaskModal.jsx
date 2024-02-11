import styles from "./TaskModal.module.css";
import { handleDeleteTask } from "../../util/util.js";

function TaskModal({ task, setIsTaskModalOpen, handleRerender }) {
    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <div className={styles.header}>Description: </div>
                <div className={styles.description}>{task.info}</div>

                <button
                    className={styles.completeButton}
                    onClick={() => {
                        setIsTaskModalOpen(false);
                        handleDeleteTask(task);
                        handleRerender();
                    }}
                >
                    Completed
                </button>

                <button
                    className={styles.closeButton}
                    onClick={() => {
                        setIsTaskModalOpen(false);
                    }}
                >
                    &times;
                </button>
            </div>
        </div>
    );
}

export default TaskModal;
