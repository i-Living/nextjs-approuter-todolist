import Link from 'next/link'
import React from 'react'

export default function Sidebar() {
  return (
    <ul className="menu bg-base-200 text-base-content min-h-full h-dvh w-80 p-4">
      {/* Sidebar content here */}
      <li>
        <Link href={`/`} className="">
          Todo list
        </Link>
      </li>
      <li>
        <Link href={`/active`} className="">
          Active
        </Link>
      </li>
      <li>
        <Link href={`/done`} className="">
          Done
        </Link>
      </li>
    </ul>
  )
}
