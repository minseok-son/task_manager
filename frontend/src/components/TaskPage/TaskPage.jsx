import Task from "../Task/Task.jsx";

function TaskPage({ tasks, onClick }) {
    return (
        <div>
            <h2>Tasks</h2>
            <hr></hr>
            {tasks != null ? (
                tasks.map((task, index) => (
                    <Task key={index} task={task} onClick={onClick}></Task>
                ))
            ) : (
                <></>
            )}
        </div>
    );
}

export default TaskPage;
