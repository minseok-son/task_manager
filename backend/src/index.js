import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

const mockTasks = [
    { id: "123", info: "Task 1", points: "1000" },
    { id: "234", info: "Task 2", points: "2000" },
];

const mockUsers = [
    { username: "adam", points: "5000" },
    { username: "jack", points: "8000" },
];

app.get("/api/tasks", (request, response) => {
    return response.status(200).send(mockTasks);
});

app.post("/api/tasks", (request, response) => {
    const { body } = request;
    const newTask = { ...body };
    mockTasks.push(newTask);
    return response.status(201).send(mockTasks);
});

app.delete("/api/tasks", (request, response) => {
    const { body } = request;

    const taskIndex = mockTasks.findIndex((task) => task.id === body.id);

    if (taskIndex != -1) {
        mockTasks.splice(taskIndex, 1);
    }

    return response.status(204).send();
});

app.get("/api/leaderboard", (request, response) => {
    return response.status(200).send(mockUsers);
});

app.listen(PORT, () => {
    console.log(`Running on Port ${PORT}`);
});
