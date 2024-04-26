import React from 'react'
import UserCard from './UserCard'

const UserList = ({listofuser}) => {
    console.log(listofuser)
  return (
    <div>
   { listofuser.map(user => <UserCard user={user}/>)}
    </div>
  )
}

export default UserList