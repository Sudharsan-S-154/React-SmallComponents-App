import React from 'react'
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

const TodoItems = ({ allTask, handleDeleteTask, setTaskFinished, taskFinished, handleCompleteTask, searchTerm, handleEditTask }) => {
    return (
        <div className='todoItems'>
            {

                allTask.length > 0 && (

                    allTask.map((item, index) => (
                        item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
                        <div className={`todoItem ${item.isCompleted === true ? "taskFinished" : ""}`} key={item.id} onClick={() => { handleCompleteTask(item.id) }}>
                            <p>{item.name}</p>
                            <div className='editAndDelete'>
                                <FaEdit className='editButton' onClick={(e) => { 
                                    e.stopPropagation();
                                    handleEditTask(item.id) }} />
                                <FaTrashAlt className='deleteButton' onClick={(e) => {
                                    e.stopPropagation()
                                    handleDeleteTask(item.id)
                                }}
                                />
                            </div>

                        </div>
                    ))
                )
            }
        </div>
    )
}

export default TodoItems