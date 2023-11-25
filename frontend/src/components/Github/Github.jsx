import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'


const Github = () => {

    const data =useLoaderData()

    // const [data,setData]=useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/ayushk1234')
    //     .then(response =>response.json())
    //     .then(data=>setData(data))

    // },[])

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
        <h2>Github</h2> 
        <img src={data.avatar_url}/></div>
  )
}

export default Github

export const githubLoader = async ()=>{
    const response = await fetch('https://api.github.com/users/ayushk1234')
    // .then(response =>response.json())

    // .then(data=>setData(data))

    return response.json()

}