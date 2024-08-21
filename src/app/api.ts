import { ITask } from './components/Task'

const baseUrl = 'http://localhost:3001'

export const getAllTasks = async (): Promise<ITask[]> => {
  const res = await fetch(`${baseUrl}/tasks`, {
    cache: 'no-store',
    headers: {
      'Content-type': 'application/json',
    },
  })
  return await res.json()
}

export const addTaskMethod = async (data: ITask): Promise<any> => {
  return await fetch(`${baseUrl}/tasks`, {
    cache: 'no-store',
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(data),
  })
}

export const updateTaskMethod = async (data: ITask): Promise<any> => {
  return await fetch(`${baseUrl}/tasks/${data.id}`, {
    cache: 'no-store',
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(data),
  })
}

export const deleteTaskMethod = async (id: string): Promise<any> => {
  return await fetch(`${baseUrl}/tasks/${id}`, {
    cache: 'no-store',
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
    },
  })
}
