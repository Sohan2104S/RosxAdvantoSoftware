import React, { useState, useEffect } from 'react';
import axios from '../services/taskService';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        axios.getTasks().then(setTasks);
    }, []);

    return (
        <div>
            <h1>Task List</h1>
            <ul>
                {tasks.map(task => (
                    <li key={task._id}>
                        {task.title} - {task.status}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
