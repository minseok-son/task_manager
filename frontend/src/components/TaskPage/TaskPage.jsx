import Task from "../Task/Task.jsx";

function TaskPage({ tasks, handleRerender }) {
    return (
        <div>
            <h2>Tasks</h2>
            <hr></hr>
            {tasks != null ? (
                tasks.map((task, index) => (
                    <Task
                        key={index}
                        index={index}
                        task={task}
                        handleRerender={handleRerender}
                    />
                ))
            ) : (
                <></>
            )}
        </div>
    );
}

export default TaskPage;
