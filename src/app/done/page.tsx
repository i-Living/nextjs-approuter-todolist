'use server'

import React from 'react'
import TaskList from '../components/TaskList'
import { getAllTasks } from '../api'

export default async function Page() {
  const tasks = await getAllTasks()

  return (
    <div className="flex flex-col items-center min-w-96 w-full p-10">
      <TaskList tasks={tasks.filter((item) => item.isActive === false)} />
    </div>
  )
}
