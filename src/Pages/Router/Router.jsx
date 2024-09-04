import React from 'react'
import SideBar from '../../Components/SideBar/SideBar'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Home/HomePage'

const Router = () => {
  return (
    <div>
        <div className='flex'>
            <div className='w-[20%] border border-r-slate-200'>  {/* banner icons */}
                <SideBar/>
            </div>
            <div>
                <Routes>{/* Home Routes */}
                    <Route path='/' element={<HomePage/>}></Route>
                </Routes>
            </div>
        </div>
    </div>
  )
}

export default Router