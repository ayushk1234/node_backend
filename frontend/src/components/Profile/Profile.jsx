import React ,{useContext} from 'react'
import UserContext from '../../context/Usercontext'

const Profile = () => {

    const {user} = useContext(UserContext)




    if (!user){
        return (
            <div>hi</div>
        )
    }
    
    return (  
        <div>{user.username}</div>
  )
}

export default Profile