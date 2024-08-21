'use client'

import React from 'react'
import TextInput from './components/TextInput'
import TaskList from './components/TaskList'
import { useTasks } from './hooks/useTasks'

export default function Page() {
  const { tasks } = useTasks()

  return (
    <div className="flex flex-col items-center min-w-96 w-full p-10">
      <TextInput />
      <TaskList tasks={tasks} />
    </div>
  )
}
