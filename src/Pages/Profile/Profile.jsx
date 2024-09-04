import React from 'react'
import { ProfileUserDetails } from '../../Components/ProfileComponents/ProfileUserDetails'
import UserPost from '../../Components/ProfileComponents/UserPost'

const Profile = () => {
  return (
    <div className='px-20'>
      <div>
          <ProfileUserDetails/>
      </div>
      <div>
        <UserPost/>
      </div>
    </div>
  )
}

export default Profile