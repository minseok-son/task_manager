import styles from "./Rank.module.css";

function Rank({ username, points, place }) {
    let rankStyle;

    switch (place) {
        case 1:
            rankStyle = styles.gold;
            break;
        case 2:
            rankStyle = styles.silver;
            break;
        case 3:
            rankStyle = styles.bronze;
            break;
        default:
            break;
    }

    return (
        <div className={`${styles.rankContainer} ${rankStyle}`}>
            <div className={styles.place}>{place}</div>
            <div>
                <div className={styles.username}>{username}</div>
                <div className={styles.points}>{points}</div>
            </div>
        </div>
    );
}

export default Rank;
