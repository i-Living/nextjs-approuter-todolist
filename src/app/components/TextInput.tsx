'use client'

import React, { useRef } from 'react'
import { addTask } from '../actions'

export default function TextInput() {
  const ref = useRef<HTMLFormElement>(null)
  const handleFormAction = async (formData: FormData) => {
    ref.current?.reset()
    await addTask(formData)
  }
  return (
    <form ref={ref} className="w-full" action={handleFormAction}>
      <input type="text" name="task" placeholder="Type here" className="input input-bordered w-full" />
    </form>
  )
}
