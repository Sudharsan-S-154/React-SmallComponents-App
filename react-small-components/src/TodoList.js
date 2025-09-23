import React, { useEffect, useRef, useState } from 'react'
import TodoItems from './TodoItems';


const TodoList = () => {

    const [allTask, setAllTask] = useState([]);
    const [taskName, setTaskName] = useState("");
    const [taskFinished, setTaskFinished] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [isEdit, setIsEdit] = useState(false);
    const [currentEditNumber, setCurrentEditNumber] = useState(0);
    const [currentEditValue, setCurrentEditValue] = useState("");

    const refEdit = useRef(null);

    const handleAddTask = (e) => {
        e.preventDefault();
        if (!taskName) {
            setAllTask(allTask);
            return;
        }

        const newTaskName = {
            id: allTask.length === 0 ? 1 : (allTask[allTask.length - 1].id) + 1,
            name: taskName,
            isCompleted: false
        }
        setAllTask([...allTask, newTaskName]);
        setTaskName("");
    }

    const handleCompleteTask = (id) => {
        const newTaskName = allTask.map((item) => (
            item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
        ))
        setAllTask(newTaskName);
    }

    const handleDeleteTask = (id) => {
        console.log("working...")
        const newTask = allTask.filter((item) => (
            item.id !== id
        ))
        console.log("working--2")
        setAllTask(newTask);
    }

    const handleSearchTask = (e) => {
        e.preventDefault();
        //   setSearchTerm()
    }

    useEffect(() => {
        refEdit.current?.focus();
    },[isEdit])

    const handleEditTask = (id) => {
        const taskToEdit = allTask.find((task) => task.id === id);
        setCurrentEditValue(taskToEdit.name);
        setCurrentEditNumber(id);
        setIsEdit(true);

    }

    const handleSubmitEditTask = (e) => {
        e.preventDefault();
        const newTask = allTask.map((item) => (
            item.id === currentEditNumber ? { ...item, name: currentEditValue } : item
        ))
        setAllTask(newTask);
        setIsEdit(false);
    }

    return (
        <div>
            <div>
                <form className='searchForm' onSubmit={handleSearchTask}>
                    <label className='searchFormLabel'>SEARCH</label>
                    <input className="searchFormInput" type='text' value={searchTerm} placeholder='Enter Your Search..' onChange={(e) => setSearchTerm(e.target.value)} />
                </form>

                {isEdit === false ?
                    <form className='addForm' onSubmit={handleAddTask}>
                        <label className='addFormLabel'>ADD NEW</label>
                        <input className="addFormInput" type='text' value={taskName} placeholder='Add a new to-do..' onChange={(e) => setTaskName(e.target.value)} />
                    </form>
                    :
                    <form className='editForm' onSubmit={handleSubmitEditTask}>
                        <label className='editFormLabel'>EDIT TASK</label>
                        <input className="editFormInput" ref={refEdit} type='text' value={currentEditValue} onChange={(e) => setCurrentEditValue(e.target.value)} />
                    </form>
                }
                <div>
                    <TodoItems allTask={allTask} handleDeleteTask={handleDeleteTask} taskFinished={taskFinished} setTaskFinished={setTaskFinished} handleCompleteTask={handleCompleteTask} searchTerm={searchTerm} handleEditTask={handleEditTask} />
                </div>
            </div>
        </div>
    )
}

export default TodoList