import { getTasks, createTask, deleteTask } from "../api/taskApi.js";
import { getLeaderboard } from "../api/leaderboardApi.js";

export const handleGetTasks = async (setTasks) => {
    try {
        const tasks = await getTasks();
        setTasks(tasks);
    } catch (error) {
        console.log("Error fetching tasks: ", error);
    }
};

export const handleCreateTask = async (title, text, score, handleRerender) => {
    try {
        await createTask(title, text, score);
        handleRerender();
    } catch (error) {
        console.log("Error creating task: ", error);
    }
};

export const handleDeleteTask = async (task, handleRerender) => {
    try {
        const statusCode = await deleteTask(task);
        handleRerender();
    } catch (error) {
        console.log("Error deleting task: ", error);
    }
};

export const handleGetLeaderboard = async (setLeaderboard) => {
    try {
        const leaderboard = await getLeaderboard();
        setLeaderboard(leaderboard);
    } catch (error) {
        console.log("Error fetching tasks: ", error);
    }
};
