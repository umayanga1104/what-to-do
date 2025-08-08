import { MdDeleteOutline} from "react-icons/md";

export default function Todo(todoProps) {    

    return (<>
        <div className={`${todoProps.isCompleted ? "bg-gray-800 text-gray-300 line-through": "bg-white/20 text=white"} flex flex-row items-center w-full h-15 p-4 rounded-sm shadow-lg mb-2 hover:bg-white/10`}>
            <div className="inline-flex items-center mr-4">
                <input className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"  
                    id="chk-bx purple-checkbox" 
                    type="checkbox"
                    checked={todoProps.isCompleted}
                    onChange={() => todoProps.onToggleComplete(todoProps.id)}
                />
            </div>

            <p className="text-sm  mr-10 w-1/2">
                {todoProps.title}
            </p>

            <div className="flex justify-end w-full items-center">
                <MdDeleteOutline className="text-white/90 w-5 h-5 hover:text-red-500 duration-500"
                    key={todoProps.id} 
                    onClick={() => todoProps.onDelete(todoProps.id)} 
                />    
            </div>
        </div>
    </>);
}