import React from 'react'
import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'

FormValues = {
  name :string,
  email:string,
  channel:string
}

const YoutubeForm = () => {

  const form = useForm()
  const { register,control,handleSubmit } = form
  const { name, ref, onChange, onBlur } = register("username")

  const onSubmit = (data) =>{
    console.log( 'Form submitted',data)
  }
  return (

    <div>
      <div>YoutubeForm</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <lable htmlFor="username">Username</lable>
        <input type="text" id="username" name={name} ref={ref} onChange={onChange} onBlur={onBlur} />

        <lable htmlFor="email">E-mail</lable>
        <input type="email" id="email" {...register("email")} />

        <lable htmlFor="channel">Channel</lable>
        <input type="text" id="channel" {...register("channel")} />

        <button>Submit</button>
      </form>
      <DevTool control={control}/>

    </div>

  )
}

export default YoutubeForm