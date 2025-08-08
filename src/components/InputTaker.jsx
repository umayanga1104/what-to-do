import React, { useState, useEffect, useRef } from 'react'; 

export default function InputTaker({addTodo}) {

    const inputRef = useRef(null);
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);

    useEffect(() => {
        if(inputRef) {
            inputRef.current.addEventListener("focus", handleFocus);
            inputRef.current.addEventListener("blur", handleBlur);
        }

        return () => {
            if(inputRef.current) {
                inputRef.current.removeEventListener("focus", handleFocus);
                inputRef.current.removeEventListener("blur", handleBlur);
            }
        }
    },[]);  

    //Add todo by pressing Enter key
    const handleKeyDown = (e) => {
        if(e.key === 'Enter' && inputRef.current.value.trim() !== "") {
            const newTodo = inputRef.current.value.trim();
            addTodo(newTodo); // Call the function passed as prop to add the todo
            inputRef.current.value = ''; // Clear the input field after adding
        }
    }

    return (<>
        <div className={`myInput-container border-1 border-white/0 flex flex-row w-275 p-4 m-auto h-auto bg-white/10     mt-8 items-center ${isFocused? "bg-white/30 border-solid border-1 border-purple-600" : ""}  hover:bg-white/20 duration-300 rounded-sm`}>
            <div className={`w-6 h-6 bg-blue-500/10 rounded-full border-1 border-white/20 ${isFocused ? "bg-purple-600/70": ""} duration-600`}></div>
            <input  className="p-1 w-full placeholder-purple-600/70 ml-6 focus:outline-none" 
                    ref={inputRef} 
                    id="myInput" 
                    type="text" 
                    placeholder= "Enter your task"
                    onKeyDown={handleKeyDown}
                    />
        </div>  
    </>)
}