import styles from "./CreateTaskModal.module.css";
import { useState } from "react";
import { handleCreateTask } from "../../util/util.js";

function CreateTaskModal({ setIsCreateTaskModalOpen, handleRerender }) {
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [score, setScore] = useState(0);
    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <div>
                    <div>
                        Title:{" "}
                        <input
                            className={styles.score}
                            onChange={(e) => setTitle(e.target.value)}
                        ></input>
                    </div>

                    <div>Description:</div>
                    <textarea
                        className={styles.textarea}
                        onChange={(e) => setText(e.target.value)}
                    ></textarea>

                    <div>
                        Points:{" "}
                        <input
                            className={styles.score}
                            type="number"
                            onChange={(e) => setScore(e.target.value)}
                        ></input>
                    </div>
                </div>

                <button
                    className={styles.createButton}
                    onClick={() => {
                        handleCreateTask(title, text, score);
                        setIsCreateTaskModalOpen(false);
                        handleRerender();
                    }}
                >
                    Create
                </button>

                <button
                    className={styles.closeButton}
                    onClick={() => {
                        setIsCreateTaskModalOpen(false);
                    }}
                >
                    &times;
                </button>
            </div>
        </div>
    );
}

export default CreateTaskModal;
