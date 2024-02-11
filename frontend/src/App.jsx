import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import TaskPage from "./components/TaskPage/TaskPage.jsx";
import LeaderBoardPage from "./components/LeaderboardPage/LeaderboardPage.jsx";
import { handleGetTasks, handleGetLeaderboard } from "./util/util.js";
import "./App.css";

function App() {
    const [activeButton, setActiveButton] = useState("tasks");
    const [tasks, setTasks] = useState();
    const [leaderboard, setLeaderboard] = useState();
    const [rerender, setRerender] = useState(0);

    const handleSidebarButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };

    const handleRerender = () => {
        setRerender((rerender) => rerender + 1);
    };

    useEffect(() => {
        handleGetTasks(setTasks);
        handleGetLeaderboard(setLeaderboard);
    }, [rerender]);

    return (
        <div className="container">
            <Sidebar
                activeButton={activeButton}
                handleButtonClick={handleSidebarButtonClick}
                handleRerender={handleRerender}
            />

            <div className="content">
                {activeButton === "tasks" && (
                    <TaskPage tasks={tasks} handleRerender={handleRerender} />
                )}
                {activeButton === "leaderboard" && (
                    <LeaderBoardPage leaderboard={leaderboard} />
                )}
            </div>
        </div>
    );
}

export default App;
