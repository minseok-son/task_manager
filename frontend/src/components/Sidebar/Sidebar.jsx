import styles from "./Sidebar.module.css";
import { useState } from "react";
import CreateTaskModal from "../CreateTaskModal/CreateTaskModal";

function Sidebar({ activeButton, handleButtonClick, handleRerender }) {
    const [isCreateTaskModalOpen, setIsCreateTaskModalOpen] = useState(false);
    return (
        <>
            <div className={styles.sidebar}>
                <img
                    className={styles.profilePicture}
                    src="https://via.placeholder.com/150"
                    alt="profile picture"
                ></img>

                <button
                    className={
                        activeButton === "tasks" ? `${styles.active}` : ""
                    }
                    onClick={() => handleButtonClick("tasks")}
                >
                    Tasks
                </button>

                <button
                    className={
                        activeButton === "leaderboard" ? `${styles.active}` : ""
                    }
                    onClick={() => handleButtonClick("leaderboard")}
                >
                    Leaderboard
                </button>

                <button
                    className={styles.createButton}
                    onClick={() => setIsCreateTaskModalOpen(true)}
                >
                    Create New Task
                </button>
            </div>

            {isCreateTaskModalOpen && (
                <CreateTaskModal
                    isCreateTaskModalOpen={isCreateTaskModalOpen}
                    setIsCreateTaskModalOpen={setIsCreateTaskModalOpen}
                    handleRerender={handleRerender}
                />
            )}
        </>
    );
}

export default Sidebar;
