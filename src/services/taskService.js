import axios from 'axios';

const API_URL = 'http://localhost:5000/api/tasks';

const getTasks = async () => {
    const res = await axios.get(API_URL);
    return res.data;
};

const addTask = async (task) => {
    await axios.post(API_URL, task);
};

export default { getTasks, addTask };
