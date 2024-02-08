const BASE_URL = "http://localhost:3000/api";

export const getLeaderboard = async () => {
    try {
        const res = await fetch(`${BASE_URL}/leaderboard`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!res.ok) {
            throw new Error("Failed to fetch leaderboard");
        }

        const data = await res.json();
        return data;
    } catch (error) {
        console.log("Error: " + error);
        throw error;
    }
};
