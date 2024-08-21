import useLocalStorageState from 'use-local-storage-state'
import { ITask } from '../components/Task'
import todos from '../../data/todos.json'

export const useTasks = () => {
  const [tasks, setTasks] = useLocalStorageState('todo-tasks', {
    defaultValue: todos.tasks,
  })

  const addTask = async (task: ITask) => {
    setTasks([...tasks, task])
  }

  const updateTask = async (updatedTask: ITask) => {
    setTasks(tasks.map((task) => (task.id === updatedTask.id ? { ...updatedTask } : task)))
  }

  const deleteTask = async (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return {
    tasks,
    addTask,
    updateTask,
    deleteTask,
  }
}
