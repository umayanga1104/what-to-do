import Todo from "./Todo";

export default function TodoList(todoListProp) {

    return (<>
        <div className="flex flex-col w-275 m-auto h-109 bg-white/0 p-4 rounded-sm overflow-y-scroll no-scrollbar">

            {todoListProp.todoList.map((todo, index) => (
                <Todo id={index} key={index} title={todo.title} onToggleComplete={todoListProp.onToggleComplete} isCompleted={todo.isCompleted} onDelete={todoListProp.onDelete}/>
            ))}
        </div>
    </>);
}