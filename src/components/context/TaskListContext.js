import React, { createContext, useState } from 'react'

export const TaskListContext = createContext()

const TaskListContextProvider = (props) => {
    const [tasks, setTask] = useState([
        {task: 'Read a Book', id: 1},
        {task: 'Wash the car', id: 2},
        {task: 'Write some code', id: 3},
    ])
    return (
        <TaskListContextProvider value={{tasks}}>
            {props.children}
        </TaskListContextProvider>
    )
}

export default TaskListContextProvider;
