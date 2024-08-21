'use client'

import React, { ChangeEvent, FormEvent, useState } from 'react'
import { text } from 'stream/consumers'
import { v4 as uuidv4 } from 'uuid'
import { useTasks } from '../hooks/useTasks'

export default function TextInput() {
  const [text, setText] = useState('')
  const { addTask } = useTasks()
  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const task = {
      id: uuidv4(),
      text: text,
      isActive: true,
    }
    addTask(task)
    setText('')
  }
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
  }
  return (
    <form className="w-full" onSubmit={onSubmit}>
      <input
        type="text"
        value={text}
        onChange={onChange}
        placeholder="Type here"
        className="input input-bordered w-full"
      />
    </form>
  )
}
