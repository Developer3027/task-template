import React from 'react'
import TaskList from './TaksList'
import TaskListContextProvider from './context/TaskListContext'

const App = () => {
    return (
        <TaskListContextProvider>
            <div>
                <TaskList />
            </div>
        </TaskListContextProvider>
    )
}

export default App
