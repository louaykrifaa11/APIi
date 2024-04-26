import React from 'react'

const UserCard = ({user}) => {
  return (
    <>
  
    <div>{user.name}</div>
    <div>{user.email}</div>
 </>
  )
}

export default UserCard