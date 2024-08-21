'use client'

import { useState, useEffect } from 'react'
import { ITask } from '../components/Task'
import { addTaskMethod, deleteTaskMethod, getAllTasks, updateTaskMethod } from '../api'

export const useTasks = () => {
  const [tasks, setTasks] = useState<ITask[]>([])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await getAllTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
  }, [tasks])

  const addTask = async (task: ITask) => {
    //Todo: add optimistic request here
    const data = await addTaskMethod(task)
    console.log('addTask: data=', data)
    setTasks([...tasks, task])
  }

  const updateTask = async (updatedTask: ITask) => {
    const data = await updateTaskMethod(updatedTask)
    console.log('updateTask: data=', data)
    setTasks(tasks.map((task) => (task.id === updatedTask.id ? { ...updatedTask } : task)))
  }

  const deleteTask = async (id: string) => {
    const data = await deleteTaskMethod(id)
    console.log('deleteTask: data=', data)
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return {
    tasks,
    addTask,
    updateTask,
    deleteTask,
  }
}
