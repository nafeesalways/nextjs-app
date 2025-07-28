import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <div className='flex justify-center items-center'>
      <h2>404 Not found</h2>
      <Link href='/'>Go Back to Home</Link>
    </div>
  )
}
