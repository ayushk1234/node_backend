import React, { useCallback, useEffect, useState,useRef } from 'react'

const PasswordGenerator = () => {

    const [length,setLength]=useState(8)
    const [number,setNumber]=useState(false)
    const [character,setCharacter]=useState(false)
    const [password,setPassword]=useState("")
    const passwordref=useRef(null)

    const passwordGenerator=()=>{
        useCallback(()=>{},[])

    }



    const genrator = useCallback(()=>{
        let pass=""
        let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        if(number) str +="0123456789"
        if(character) str +="#$%&'()*+,-./"
        console.log(" in genearot")
        for (let index = 1; index <= length; index++) {
            let char =Math.floor(Math.random()*str.length+1)
            pass += str.charAt(char)
            // const element = array[index];
            
        }

        setPassword(pass)
        
    },[length,number,character,setPassword])


    useEffect(()=>{
        genrator()
    },[length,number,character,genrator])

    const copypassword= useCallback(()=>{
        passwordref.current?.select()
        passwordref.current?.setSelectionRange(0,3)
        window.navigator.clipboard.writeText(password)

    },[password])


  return (
    <div className='w-full max-w-md'>
        <h1>PasswordGenerator</h1>
        <input 
        tpye="text"
        value={password}
        placeholder='Password'
        readOnly 
        ref={passwordref}
        />
        <button onClick={copypassword}>copy</button>

        <div>
            <div>
                <input
                type="range"
                min={6}
                max={100}
                value={length}
                onChange={(e)=>{setLength(e.target.value)}}
                />
                <label>Length :{length}</label>
            </div>
            <div>
                <input
                type="checkbox"
                defaultChecked={number}
                id="numberINput"
                onChange={()=>{setNumber((prev)=>!prev)}}
                />
                <label>Number</label>
            </div>
            <div>
                <input
                type="checkbox"
                defaultChecked={character}
                // value={length}
                id="characterInput"
                onChange={()=>{setCharacter((prev)=>!prev)}}
                />
                <label>Character</label>
            </div>
        </div>
        </div>
  )
}

export default PasswordGenerator