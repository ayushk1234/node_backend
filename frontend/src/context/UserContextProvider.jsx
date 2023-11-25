import React from "react";
import UserContext from "./Usercontext";
import User from "../components/User/User";


const UserContextProvider =({children})=>{

    const [user,setUser]=React.useState(null)

    return (
        <UserContext.Provider value={{user,setUser}}>
        {children}
        </UserContext.Provider>
    )

}

export default UserContextProvider