import Todo from "../components/Todo";

const completedTasksPage = ({todoList}) => {
    const completedTasks = todoList.filter(todo => todo.isCompleted);

    
    return(<> 
        <div className="completed-container w-screen h-screen bg-black/92 text-white">
            <h1 className="ml-20 mt-10 mb-5 text-3xl font-bold">Completed Tasks ✅</h1>

            {completedTasks.length > 0 ? (
                <ul className="ml-23 mt-9 width-1/2 m-auto  text-lg">
                    {completedTasks.map(task => (
                        <li key={task.id} className="mb-2 p-2 bg-gray-800 w-1/2 rounded-sm shadow-md h-15 p-4">
                            {task.title}
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="ml-20 mt-5">No completed tasks found.</p>
            )}
        </div>
    </>); 
}

export default completedTasksPage;