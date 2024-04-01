import React, {useState} from 'react'
import styles from './ToDoList.module.css'

function ToDoList() {
    
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(e) {
        setNewTask((n) => e.target.value);
    }

    function addTask() {
        const addedTask = {  }
        if (newTask.trim() !== "") {
            setTasks(t => [...tasks, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]]
            setTasks(updatedTasks);
        }
    }
    
    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]]
            setTasks(updatedTasks);
        }
    }

    return(      
    <div className={styles.toDoList}>
        <h1>To-Do-List</h1>
        
        <div className={styles.inputContainer}>
            <input type='text' placeholder='Enter a task...' value={newTask} onChange={handleInputChange}></input>
            <button className={styles.addButton} onClick={addTask}>Add</button>
        </div>

        <ol>
            {tasks.map((task,index) =>  <li key={index}>
                                            <span className={styles.text}>{task}</span>
                                            <button className={styles.deleteButton} onClick={() => deleteTask(index)}>Delete</button>
                                            <button className={styles.moveButton} onClick={() => moveTaskUp(index)}>Move Up</button>
                                            <button className={styles.moveButton} onClick={() => moveTaskDown(index)}>Move Down</button>
                                        </li>)}
        </ol>
    </div>
    );
}

export default ToDoList