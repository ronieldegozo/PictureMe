import React, { useState } from 'react'
import {AiOutlineTablet, AiOutlineUser } from "react-icons/ai"
import { RiVideoAddLine, RiSave3Line } from "react-icons/ri";
import UserPostCard from './UserPostCard';
import "./UserPost.css"

const UserPost = () => {
    const [activeTab,setActiveTab]=useState()

    const tabs = [
        {
            tab: "Post",
            icon: <AiOutlineTablet></AiOutlineTablet>,
            activeTab:""
        },
        {
            tab: "Reels",
            icon: <RiVideoAddLine></RiVideoAddLine>
        },
        {
            tab: "Save",
            icon: <RiSave3Line></RiSave3Line>
        },
        {
            tab: "Tagged",
            icon: <AiOutlineUser></AiOutlineUser>
        }
    ]

  return (
    <div>
        <div className='flex space-x-14 border-t relative'>
            {tabs.map((item) =>
                <div 
                    onClick={()=>setActiveTab(item.tab)} 
                    className={`${activeTab===item.tab?"border-t border-black":"opacity:-60"} flex items-center cursor-pointer py-2 text-sm`}>
                    <p>{item.icon}</p>
                    <p className='ml-1'>{item.tab}</p>
                </div>)}

        </div>
        <div>
            <div className='flex flex-wrap'>
                {[1,1,1,1,1,1,1,1,1,1,1,1,1,1].map((item) =><UserPostCard/>)}
            </div>
        </div>
    </div>
  )
}



export default UserPost