'use server'

import { revalidatePath } from 'next/cache'
import { addTaskMethod, deleteTaskMethod, updateTaskMethod } from '../api'
import { ITask } from '../components/Task'
import { v4 as uuidv4 } from 'uuid'

export const addTask = async (formData: FormData) => {
  const text = formData.get('task')?.toString()
  if (text) {
    const task: ITask = {
      id: uuidv4(),
      text,
      isActive: true,
    }
    await addTaskMethod(task)
    revalidatePath('/')
  }
}

export const updateTask = async ({ id, text, isActive }: ITask) => {
  await updateTaskMethod({ id, text, isActive })
  revalidatePath('/')
}

export const deleteTask = async (id: string) => {
  await deleteTaskMethod(id)
  revalidatePath('/')
}
