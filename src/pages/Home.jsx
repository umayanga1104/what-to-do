import { useState } from "react";
import TodoList from "../components/TodoList";
import InputTaker from "../components/InputTaker";
import ConfirmDialog from "../components/ConfirmDialog";

export default function Home({todoList, setTodoList}) {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [todoIndex, setTodoIndex] = useState(null);
    
    const handleAddTodo = (newTodo)=> {
        const newTodoItem = {
            id: Date.now(),
            title: newTodo,
            isCompleted: false
        }

        setTodoList([...todoList, newTodoItem]);
    }

    const handleDeletRequest = (indexOfTodo) => {
        setTodoIndex(indexOfTodo);
        setIsDialogOpen(true);
    }

    const handleConfirmDelete = () => {
        if(todoIndex != null) {
            setIsDialogOpen(false);

            const updatedTodoList  = [...todoList];
            updatedTodoList.splice(todoIndex, 1);
            setTodoList(updatedTodoList);
        }else {
            console.error("No todo item selected for deletion.");
        }
    }

    const handleCancelDelete = () => {
        setTodoIndex(null);
        setIsDialogOpen(false);
    }

    const onToggleComplete = (index) => {
        const updatedTodoList = [...todoList];
        updatedTodoList[index].isCompleted = !updatedTodoList[index].isCompleted;
        setTodoList(updatedTodoList);
    }

    return (<>
        <div className="home-container w-screen h-screen bg-black/92 text-white">
            <h1 className="ml-20 mt-10 mb-5 text-3xl font-bold">Daily Tasks 📝</h1>
            <TodoList todoList={todoList} onDelete={handleDeletRequest} onToggleComplete= {onToggleComplete}/>
            <InputTaker addTodo={handleAddTodo}/>

            <ConfirmDialog
                isOpen={isDialogOpen}
                onConfirm={handleConfirmDelete}
                onCancel={handleCancelDelete}
            />
        </div>
    </>);
}