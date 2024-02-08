function LeaderBoardPage({ leaderboard }) {
    return (
        <div>
            <h2>Leaderboard</h2>
            <hr></hr>
            {leaderboard != null ? (
                leaderboard.map((user, index) => (
                    <div key={index}>{user.username}</div>
                ))
            ) : (
                <></>
            )}
        </div>
    );
}

export default LeaderBoardPage;
