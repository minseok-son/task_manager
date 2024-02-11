import Rank from "../Rank/Rank.jsx";

function LeaderBoardPage({ leaderboard }) {
    return (
        <div>
            <h2>Leaderboard</h2>
            <hr></hr>
            {leaderboard != null ? (
                leaderboard.map((user, index) => (
                    <Rank
                        key={index}
                        username={user.username}
                        points={user.points}
                        place={index + 1}
                    />
                ))
            ) : (
                <></>
            )}
        </div>
    );
}

export default LeaderBoardPage;
