import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

// mock tasks simulating database
const mockTasks = [
    { id: "123", title: "Task 1", info: "Task 1", points: 3000 },
    { id: "234", title: "Task 2", info: "Task 2", points: 4000 },
];

// mock users simulating database
const mockUsers = [
    { username: "adam", points: 5000 },
    { username: "jack", points: 8000 },
    { username: "You", points: 0 },
];

// (GET) /api/tasks returns all the tasks
app.get("/api/tasks", (request, response) => {
    return response.status(200).send(mockTasks);
});

// (POST) /api/tasks adds new task to the list of tasks
app.post("/api/tasks", (request, response) => {
    const { body } = request;
    const newTask = { ...body };
    mockTasks.push(newTask);
    return response.status(201).send(mockTasks);
});

// (DELETE) /api/tasks removes specified task from the list of tasks
// and adds the corresponding points to appropriate user
app.delete("/api/tasks", (request, response) => {
    const { body } = request;

    const points = body.points;
    const taskIndex = mockTasks.findIndex((task) => task.id === body.id);
    const userIndex = mockUsers.findIndex((user) => user.username === "You");

    if (taskIndex != -1) {
        mockTasks.splice(taskIndex, 1);
        mockUsers[userIndex].points += parseInt(points);

        return response.status(204).send();
    }

    return response.status(404).send();
});

// (GET) /api/leaderboard sorts the users by points
// and returns the top 3 users
app.get("/api/leaderboard", (request, response) => {
    mockUsers.sort((a, b) => b.points - a.points);
    const leaderboard = mockUsers.slice(0, 3);

    return response.status(200).send(leaderboard);
});

app.listen(PORT, () => {
    console.log(`Running on Port ${PORT}`);
});
