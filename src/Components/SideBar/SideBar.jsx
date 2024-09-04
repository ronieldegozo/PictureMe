import React, { useState } from 'react'
import { IoReorderThree } from "react-icons/io5";
import { menu } from './SideBarConfig';
import { useNavigate } from 'react-router-dom';

const SideBar = () => {

  const [activeTab,setActiveTab]=useState();
  const navigate = useNavigate();
  
  const handleTabClick = (title)=>{
    setActiveTab(title)
    if(title === "Profile"){
      navigate("/username")
    }else if(title === "Home"){
      navigate("/")
    }
  }

  return (
    <div className='sticky top-0 h-[100vh]'>
      <div className='flex flex-col justify-between h-full px-10'>
          <div>
            <div className='pt-10'>
                <img className='w-40' src="https://github-production-user-asset-6210df.s3.amazonaws.com/63585718/364250088-6f23518b-392d-4eaf-8210-71990848ed12.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20240904%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240904T063051Z&X-Amz-Expires=300&X-Amz-Signature=2d2ffff1748e0647851d17bc6846592c3e2e3a321ab50d5dd592b1cb9966b574&X-Amz-SignedHeaders=host&actor_id=63585718&key_id=0&repo_id=852053691" alt=""/>
            </div>
            <div className='mt-10'>{/* SideBar Config */}
              {menu.map((item) =>
              <div onClick={()=>handleTabClick(item.title)} 
                className='flex items-center mb-5 cursor-pointer text-lg'>
                {activeTab===item.title? item.activeIcon:item.icon}
                <p className={`${activeTab===item.title?"font-bold":""}`}>{item.title}</p>
              </div>)}
            </div>
          </div>

        <div className='flex items-center cursor-pointer pb-16'>
          <IoReorderThree className='text-3xl'/>    
          <p className='ml-5'>More</p>
        </div>
      </div>
    </div>
  )
}

export default SideBar