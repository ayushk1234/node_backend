import React, { useEffect, useState } from 'react'

const Form = () => {


    const [flag,setFlag]=useState(false)
    const handleData = (e)=>{
        console.log("hi")
        setInputData({...inputData,[e.target.name]:e.target.value})
        console.log(inputData)
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(!inputData.name || !inputData.email || !inputData.password){
            alert("all fields are mecce")
        }else{
            setFlag(true)
            console.log("in else")
        }
    }

    useEffect(()=>{
        console.log("registered")
    },[flag])

    const data = {name:"",email:"",password:""}
    const  [inputData,setInputData]=useState(data)

  return (
    <div>
        <pre>{(flag)?<h2>jello {inputData.name}</h2>:""}</pre>
        <div>Hilight </div>
        <form onSubmit={handleSubmit}>
            <div>
                <input type="text" placeholder="enter name" name="name" value={inputData.name} onChange={handleData}></input>
            </div>
            <br/>
            <div>
                <input type="text" placeholder="enter email" name="email" value={inputData.email} onChange={handleData}></input>
            </div>
            <br/>
            <div>
                <input type="password" placeholder="enter password" name="password" value={inputData.password} onChange={handleData}></input>
            </div>
            <br/>
            <div>
                <button >Call</button>
            </div>
        </form>

    </div>
  )
}

export default Form