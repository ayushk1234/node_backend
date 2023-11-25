import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {

    const {id} = useParams()
    console.log(id)
  return (
    <div className='bg-gray-400 text-white text-3xl'>User {id}</div>
  )
}

export default User