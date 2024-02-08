import styles from "./CreateTaskModal.module.css";
import { useState } from "react";
import { handleCreateTask } from "../../util/util.js";

function CreateTaskModal({ setIsCreateTaskModalOpen, onClick }) {
    const [text, setText] = useState("");
    const [score, setScore] = useState(0);
    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <div>My Custom Modal</div>
                <textarea
                    className={styles.textarea}
                    onChange={(e) => setText(e.target.value)}
                ></textarea>

                <input
                    className={styles.score}
                    type="number"
                    onChange={(e) => setScore(e.target.value)}
                ></input>

                <button
                    className={styles.createButton}
                    onClick={() => {
                        handleCreateTask(text, score);
                        setIsCreateTaskModalOpen(false);
                        onClick();
                    }}
                >
                    Create
                </button>

                <button
                    className={styles.closeButton}
                    onClick={() => setIsCreateTaskModalOpen(false)}
                >
                    &times;
                </button>
            </div>
        </div>
    );
}

export default CreateTaskModal;
