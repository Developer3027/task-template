import React, { useContext } from 'react'
import { TaskListContext } from '../context/TaskListContext'
import Task from './Task'

const TaksList = () => {
    const { tasks } = useContext(TaskListContext)

    return (
        <div>
            <ul className = "list">
                {tasks.map((task) => {
                    return <Task />
                })}
            </ul>
        </div>
    )
}

export default TaksList
