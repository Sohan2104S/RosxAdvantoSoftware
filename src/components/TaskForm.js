import React, { useState } from 'react';
import axios from '../services/taskService';

const TaskForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.addTask({ title, description }).then(() => {
            setTitle('');
            setDescription('');
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Add Task</h1>
            <input
                type="text"
                placeholder="Task Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                placeholder="Task Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <button type="submit">Add Task</button>
        </form>
    );
};

export default TaskForm;
