import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import TaskPage from "./components/TaskPage/TaskPage.jsx";
import LeaderBoardPage from "./components/LeaderboardPage/LeaderboardPage.jsx";
import CreateTaskModal from "./components/CreateTaskModal/CreateTaskModal.jsx";
import { handleGetTasks, handleGetLeaderboard } from "./util/util.js";
import "./App.css";

function App() {
    const [activeButton, setActiveButton] = useState("tasks");
    const [isCreateTaskModalOpen, setIsCreateTaskModalOpen] = useState(false);
    const [tasks, setTasks] = useState();
    const [leaderboard, setLeaderboard] = useState();
    const [clicked, setClicked] = useState(0);

    const handleSidebarButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };

    const handleButtonClick = () => {
        setClicked((clicked) => clicked + 1);
    };

    useEffect(() => {
        handleGetTasks(setTasks);
        handleGetLeaderboard(setLeaderboard);
    }, [clicked]);

    return (
        <div className="container">
            <Sidebar
                activeButton={activeButton}
                handleButtonClick={handleSidebarButtonClick}
                setIsCreateTaskModalOpen={setIsCreateTaskModalOpen}
            />

            <div className="content">
                {activeButton === "tasks" && (
                    <TaskPage tasks={tasks} onClick={handleButtonClick} />
                )}
                {activeButton === "leaderboard" && (
                    <LeaderBoardPage leaderboard={leaderboard} />
                )}
            </div>

            {isCreateTaskModalOpen && (
                <CreateTaskModal
                    setIsCreateTaskModalOpen={setIsCreateTaskModalOpen}
                    onClick={handleButtonClick}
                />
            )}
        </div>
    );
}

export default App;
