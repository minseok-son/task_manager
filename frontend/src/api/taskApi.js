const BASE_URL = "http://localhost:3000/api";

export const getTasks = async () => {
    try {
        const res = await fetch(`${BASE_URL}/tasks`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!res.ok) {
            throw new Error("Failed to get tasks");
        }

        const data = await res.json();
        return data;
    } catch (error) {
        console.log("Error: " + error);
        throw error;
    }
};

export const createTask = async (title, text, score) => {
    try {
        const uuid = crypto.randomUUID();
        await fetch(`${BASE_URL}/tasks`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: uuid,
                title: title,
                info: text,
                points: score,
            }),
        });
    } catch (error) {
        console.log("Error: " + error);
        throw error;
    }
};

export const deleteTask = async (task) => {
    try {
        const res = await fetch(`${BASE_URL}/tasks`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id: task.id, points: task.points }),
        });

        return res.status;
    } catch (error) {
        console.log("Error: " + error);
        throw error;
    }
};
