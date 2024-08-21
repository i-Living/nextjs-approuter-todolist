import React from 'react'
import Task, { ITask } from './Task'

export type TTaskList = ITask[]

export default function TaskList({ tasks }: { tasks: TTaskList }) {
  return (
    <div className="join join-vertical w-full">
      {tasks.map((task) => (
        <Task {...task} key={task.id} />
      ))}
    </div>
  )
}
