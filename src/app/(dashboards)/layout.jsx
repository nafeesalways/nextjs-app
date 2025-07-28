import React from 'react'

export default function DashboardLayout({children}) {
  return (
    <div>

        <div className='grid grid-cols-12'>
            {/* Side Nav */}
            <div className='col-span-3'>
                <ul>
                    <li>User List</li>
                </ul>

            </div>
            {/* 'Dashboard Content */}
            <div className='col-span-9'>  {children}</div>
        </div>
    
    </div>
  )
}
