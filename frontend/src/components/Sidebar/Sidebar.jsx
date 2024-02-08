import PropTypes from "prop-types";
import styles from "./Sidebar.module.css";

function Sidebar({
    activeButton,
    handleButtonClick,
    setIsCreateTaskModalOpen,
}) {
    return (
        <div className={styles.sidebar}>
            <img
                className={styles.profilePicture}
                src="https://via.placeholder.com/150"
                alt="profile picture"
            ></img>

            <button
                className={activeButton === "tasks" ? `${styles.active}` : ""}
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
    );
}

Sidebar.propTypes = {
    activeButton: PropTypes.string.isRequired,
    handleButtonClick: PropTypes.func.isRequired,
};

export default Sidebar;
