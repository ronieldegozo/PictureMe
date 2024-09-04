import React from 'react'
import  { TbCircleDashed } from "react-icons/tb"

export const ProfileUserDetails = () => {
  return (
    <div className='py-10 w-full'>
        <div className='flex items-center'>
            <div className='w-[45%]'  >
                <img className='w-32 h-32 rounded-full' src='https://cdn.pixabay.com/photo/2023/07/21/16/23/cat-8141916_640.jpg' alt=''/>
            </div>
            <div className='space-y-5 text-s'>
                <div className='flex space-x-16 items-center'>
                    <p></p>
                    <p>Username</p>
                    <button>Edit Profile</button>
                    <TbCircleDashed></TbCircleDashed>
                </div>
                <div className='flex space-x-16'>
                    <div>
                        <span className='font-semibold'></span>
                        <span></span>
                    </div>
                    <div>
                        <span className='font-semibold mr-4'>10</span>
                        <span>Posts</span>
                    </div>
                    <div>
                        <span className='font-semibold mr-1'>5</span>
                        <span>Followers</span>
                    </div>
                    <div>
                        <span className='font-semibold mr-2'>16</span>
                        <span>Following</span>
                    </div>
                </div>
                <div>
                    <p className='font-semibold'>Full Name</p>
                    <p className='font-thin text-sm'> fwefwefwef wef wef wf fw wf w</p>
                </div>
            </div>
        </div>
    </div>
  )
}
