'use client'

import React from 'react'
import ButtonDelete from './ButtonDelete'
import clsx from 'clsx/lite'
import { deleteTask, updateTask } from '../actions'

export interface ITask {
  id: string
  isActive: boolean
  text: string
}

export default function Task({ id, isActive, text }: ITask) {
  const onDeleteClick = () => {
    deleteTask(id)
  }
  const onCheckboxClick = () => {
    updateTask({ id, text, isActive: !isActive })
  }
  return (
    <div className="form-control py-1 px-5 w-full">
      <label className="cursor-pointer label">
        <input type="checkbox" checked={isActive} onChange={onCheckboxClick} className="checkbox checkbox-success" />
        <span className={clsx('label-text', !isActive && 'line-through')}>{text}</span>
        <ButtonDelete id={id} onClick={onDeleteClick} />
      </label>
    </div>
  )
}
