import React, { useState}from 'react';



const DisplayUser = ({user}) => {
    const [editUser, setEditUser] = useState({})
    // console.log(user)
    const id = window.location.href.split('?')[1]
    const eUser = user.filter((u)=>!(u.id === id))
    console.log(eUser)
    // setEditUser(user)
   
  return (
    <div>DisplayUser</div>
  )
}

export default DisplayUser