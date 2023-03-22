import React from 'react'
import {Navigationbar} from './components/elements/Navigationbar'
import {Outlet} from 'react-router-dom'


export const RootLayout = () => {
  return (
    <div className='container' >
        {/* navigationbar */}
        <Navigationbar />
        {/* placeholder */}
        <Outlet />
    </div>
  )
}
