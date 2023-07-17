import axios from 'axios'

const taskApi = axios.create({
    baseURL: 'http://127.0.0.1:8000/todo/tasks/todo/'
})

export const getTasks = () => {
    return taskApi.get('/')
}

export const getOneTask = (id) => {
    return taskApi.get(`/${id}/`)
}

export const createTask = (task) => {
    return taskApi.post('/', task)
}

export const deleteTask = (id) => {
    taskApi.delete(`/${id}/`)
}

export const updateTask = (id, task) => {
    taskApi.put(`/${id}/`, task)
}