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

export const handleCreateTask = async (text, score) => {
    try {
        await createTask(text, score);
    } catch (error) {
        console.log("Error creating task: ", error);
    }
};

export const handleDeleteTask = async (task) => {
    try {
        const statusCode = await deleteTask(task.id);
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
