import React, {useState} from "react"
function ToDoList(){
    const [tasks, setTasks] = useState([""])
    const [newTask, setNewTask] = useState("")
    function handleInputChange(e){
       setNewTask(e.target.value);
    }
    function addTask(){
        if(newTask !== ""){
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }    

    }
    function removeTask(index){
        const updateTasks = tasks.filter((_, i) => i !== index );
        setTasks(updateTasks);
    }
    function moveTaskUp(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] =
            [updatedTasks[index - 1], updatedTasks[index]]; 
            setTasks(updatedTasks);
        }
    }
    function moveTaskDown(index){
        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] =
            [updatedTasks[index + 1], updatedTasks[index]]; 
            setTasks(updatedTasks);
        }
    }    
    return(
        <div className="to-do-list">
            <h1>TO DO LIST</h1>
            <div>
                <input type="text"
                placeholder="What do you want to do"
                value={newTask}
                onChange={handleInputChange} />
                <button className="add-button"
                onClick={addTask}> ADD
                </button>
            </div>
            {tasks.map((task, index) => 
            <ol>
            <li key={index}>
                <span className="text">{task}</span>
                <button 
                    className="delete-button"
                    onClick={ () => removeTask(index)}>
                        Delete 
                </button>
                <button 
                    className="move-button"
                    onClick={() => moveTaskUp(index)}>
                    ⬆️
                </button>
                <button 
                    className="move-button"
                    onClick={() => moveTaskDown(index)}>
                    ⬇️
                </button>
            </li>
        </ol>)}
        </div>    
    )
}
export default ToDoList 